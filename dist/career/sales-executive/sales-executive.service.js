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
exports.SalesExecutiveService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const sales_executive_schema_1 = require("./schemas/sales-executive.schema");
let SalesExecutiveService = class SalesExecutiveService {
  constructor(salesExecutiveModel) {
    this.salesExecutiveModel = salesExecutiveModel;
  }
  async create(createSalesExecutiveDto) {
    const createdSalesExecutive = new this.salesExecutiveModel(
      createSalesExecutiveDto,
    );
    return createdSalesExecutive.save();
  }
  async findAll() {
    return this.salesExecutiveModel.find().exec();
  }
  async update(id, updateData) {
    if (!this.isUpdateDataComplete(updateData)) {
      throw new common_1.BadRequestException(
        "All fields must be provided for update",
      );
    }
    const updatedSalesExecutive = await this.salesExecutiveModel
      .findByIdAndUpdate(id, updateData, { new: true })
      .exec();
    if (!updatedSalesExecutive) {
      throw new common_1.NotFoundException(
        `Sales Executive with ID "${id}" not found`,
      );
    }
    return updatedSalesExecutive;
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
    const deletedSalesExecutive = await this.salesExecutiveModel
      .findByIdAndDelete(id)
      .exec();
    if (!deletedSalesExecutive) {
      throw new common_1.NotFoundException(
        `Sales Executive with ID "${id}" not found`,
      );
    }
    return deletedSalesExecutive;
  }
};
exports.SalesExecutiveService = SalesExecutiveService;
exports.SalesExecutiveService = SalesExecutiveService = __decorate(
  [
    (0, common_1.Injectable)(),
    __param(
      0,
      (0, mongoose_1.InjectModel)(sales_executive_schema_1.SalesExecutive.name),
    ),
    __metadata("design:paramtypes", [mongoose_2.Model]),
  ],
  SalesExecutiveService,
);
//# sourceMappingURL=sales-executive.service.js.map
