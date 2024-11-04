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
exports.ProjectManagerExecutiveService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const project_manager_executive_schema_1 = require("./schemas/project-manager-executive.schema");
let ProjectManagerExecutiveService = class ProjectManagerExecutiveService {
  constructor(projectManagerExecutiveModel) {
    this.projectManagerExecutiveModel = projectManagerExecutiveModel;
  }
  async create(createProjectManagerExecutiveDto) {
    const createdProjectManagerExecutive =
      new this.projectManagerExecutiveModel(createProjectManagerExecutiveDto);
    return createdProjectManagerExecutive.save();
  }
  async findAll() {
    return this.projectManagerExecutiveModel.find().exec();
  }
  async update(id, updateData) {
    if (!this.isUpdateDataComplete(updateData)) {
      throw new common_1.BadRequestException(
        "All fields must be provided for update",
      );
    }
    const updatedProjectManagerExecutive =
      await this.projectManagerExecutiveModel
        .findByIdAndUpdate(id, updateData, { new: true })
        .exec();
    if (!updatedProjectManagerExecutive) {
      throw new common_1.NotFoundException(
        `Project Manager Executive with ID "${id}" not found`,
      );
    }
    return updatedProjectManagerExecutive;
  }
  isUpdateDataComplete(data) {
    return !!(
      data.title &&
      data.description &&
      data.skill &&
      data.requirements
    );
  }
  async remove(id) {
    const deletedProjectManagerExecutive =
      await this.projectManagerExecutiveModel.findByIdAndDelete(id).exec();
    if (!deletedProjectManagerExecutive) {
      throw new common_1.NotFoundException(
        `Project Manager Executive with ID "${id}" not found`,
      );
    }
    return deletedProjectManagerExecutive;
  }
};
exports.ProjectManagerExecutiveService = ProjectManagerExecutiveService;
exports.ProjectManagerExecutiveService = ProjectManagerExecutiveService =
  __decorate(
    [
      (0, common_1.Injectable)(),
      __param(
        0,
        (0, mongoose_1.InjectModel)(
          project_manager_executive_schema_1.ProjectManagerExecutive.name,
        ),
      ),
      __metadata("design:paramtypes", [mongoose_2.Model]),
    ],
    ProjectManagerExecutiveService,
  );
//# sourceMappingURL=project-manager-executive.service.js.map
