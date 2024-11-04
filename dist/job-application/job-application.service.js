"use strict";
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
            ? (desc = Object.getOwnPropertyDescriptor(target, key))
            : desc,
      d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
var __metadata =
  (this && this.__metadata) ||
  function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
var __param =
  (this && this.__param) ||
  function (paramIndex, decorator) {
    return function (target, key) {
      decorator(target, key, paramIndex);
    };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobApplicationService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const applied_schema_1 = require("./schemas/applied.schema");
const ImageKit = require("imagekit");
let JobApplicationService = class JobApplicationService {
  constructor(appliedModel) {
    this.appliedModel = appliedModel;
    this.imagekit = new ImageKit({
      publicKey: process.env.IMAGEKIT_PUBLIC_KEY || "",
      privateKey: process.env.IMAGEKIT_PRIVATE_KEY || "",
      urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT || "",
    });
  }
  async create(file, createApplicationDto) {
    try {
      const result = await this.imagekit.upload({
        file: file.buffer.toString("base64"),
        fileName: file.originalname,
        folder: "applicants",
      });
      const application = new this.appliedModel({
        ...createApplicationDto,
        resume: result.url,
      });
      return await application.save();
    } catch (error) {
      throw new common_1.HttpException(
        "Failed to upload file or save application",
        common_1.HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  async findAll() {
    return this.appliedModel.find().exec();
  }
  async findOne(id) {
    const application = await this.appliedModel.findById(id).exec();
    if (!application) {
      throw new common_1.HttpException(
        "Application not found",
        common_1.HttpStatus.NOT_FOUND,
      );
    }
    return application;
  }
  async remove(id) {
    const application = await this.appliedModel.findById(id);
    if (!application) {
      throw new common_1.HttpException(
        "Application not found",
        common_1.HttpStatus.NOT_FOUND,
      );
    }
    const publicId = application.resume.substring(
      application.resume.lastIndexOf("/applicants/") + 1,
      application.resume.lastIndexOf("."),
    );
    try {
      await this.imagekit.deleteFile(publicId);
    } catch (error) {
      console.error("Failed to delete file from ImageKit:", error);
    }
    return this.appliedModel.findByIdAndDelete(id).exec();
  }
};
exports.JobApplicationService = JobApplicationService;
exports.JobApplicationService = JobApplicationService = __decorate(
  [
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(applied_schema_1.Applied.name)),
    __metadata("design:paramtypes", [mongoose_2.Model]),
  ],
  JobApplicationService,
);
//# sourceMappingURL=job-application.service.js.map
