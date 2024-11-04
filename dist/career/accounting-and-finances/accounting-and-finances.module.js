"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountingAndFinancesModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const accounting_and_finances_controller_1 = require("./accounting-and-finances.controller");
const accounting_and_finances_service_1 = require("./accounting-and-finances.service");
const accounting_and_finances_schema_1 = require("./schemas/accounting-and-finances.schema");
let AccountingAndFinancesModule = class AccountingAndFinancesModule {
};
exports.AccountingAndFinancesModule = AccountingAndFinancesModule;
exports.AccountingAndFinancesModule = AccountingAndFinancesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: accounting_and_finances_schema_1.AccountingAndFinances.name,
                    schema: accounting_and_finances_schema_1.AccountingAndFinancesSchema,
                },
            ]),
        ],
        controllers: [accounting_and_finances_controller_1.AccountingAndFinancesController],
        providers: [accounting_and_finances_service_1.AccountingAndFinancesService],
    })
], AccountingAndFinancesModule);
//# sourceMappingURL=accounting-and-finances.module.js.map