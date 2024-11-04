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
exports.AccountingAndFinancesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const accounting_and_finances_schema_1 = require("./schemas/accounting-and-finances.schema");
let AccountingAndFinancesService = class AccountingAndFinancesService {
  constructor(accountingAndFinancesModel) {
    this.accountingAndFinancesModel = accountingAndFinancesModel;
  }
  async create(createAccountingAndFinancesDto) {
    const createdAccountingAndFinances = new this.accountingAndFinancesModel(
      createAccountingAndFinancesDto,
    );
    return createdAccountingAndFinances.save();
  }
  async findAll() {
    return this.accountingAndFinancesModel.find().exec();
  }
  async update(id, updateData) {
    if (!this.isUpdateDataComplete(updateData)) {
      throw new common_1.BadRequestException(
        "All fields must be provided for update",
      );
    }
    const updatedAccountingAndFinances = await this.accountingAndFinancesModel
      .findByIdAndUpdate(id, updateData, { new: true })
      .exec();
    if (!updatedAccountingAndFinances) {
      throw new common_1.NotFoundException(
        `Accounting and Finances with ID "${id}" not found`,
      );
    }
    return updatedAccountingAndFinances;
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
    const deletedAccountingAndFinances = await this.accountingAndFinancesModel
      .findByIdAndDelete(id)
      .exec();
    if (!deletedAccountingAndFinances) {
      throw new common_1.NotFoundException(
        `Accounting And Finances with ID "${id}" not found`,
      );
    }
    return deletedAccountingAndFinances;
  }
};
exports.AccountingAndFinancesService = AccountingAndFinancesService;
exports.AccountingAndFinancesService = AccountingAndFinancesService =
  __decorate(
    [
      (0, common_1.Injectable)(),
      __param(
        0,
        (0, mongoose_1.InjectModel)(
          accounting_and_finances_schema_1.AccountingAndFinances.name,
        ),
      ),
      __metadata("design:paramtypes", [mongoose_2.Model]),
    ],
    AccountingAndFinancesService,
  );
//# sourceMappingURL=accounting-and-finances.service.js.map
