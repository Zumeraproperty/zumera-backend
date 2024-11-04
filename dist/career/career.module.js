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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CareerModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const career_controller_1 = require("./career.controller");
const career_service_1 = require("./career.service");
const accounting_and_finances_schema_1 = require("./accounting-and-finances/schemas/accounting-and-finances.schema");
const architecture_and_designs_schema_1 = require("./architecture-and-designs/schemas/architecture-and-designs.schema");
const civil_engineerings_schema_1 = require("./civil-engineerings/schemas/civil-engineerings.schema");
const cooperate_attorneys_schema_1 = require("./cooperate-attorneys/schemas/cooperate-attorneys.schema");
const hrs_schema_1 = require("./hrs/schemas/hrs.schema");
const operations_schema_1 = require("./operations/schemas/operations.schema");
const procurements_schema_1 = require("./procurements/schemas/procurements.schema");
const project_manager_executive_schema_1 = require("./project-manager-executive/schemas/project-manager-executive.schema");
const sales_executive_schema_1 = require("./sales-executive/schemas/sales-executive.schema");
let CareerModule = class CareerModule {};
exports.CareerModule = CareerModule;
exports.CareerModule = CareerModule = __decorate(
  [
    (0, common_1.Module)({
      imports: [
        mongoose_1.MongooseModule.forFeature([
          {
            name: accounting_and_finances_schema_1.AccountingAndFinances.name,
            schema:
              accounting_and_finances_schema_1.AccountingAndFinancesSchema,
          },
          {
            name: architecture_and_designs_schema_1.ArchitectureAndDesigns.name,
            schema:
              architecture_and_designs_schema_1.ArchitectureAndDesignsSchema,
          },
          {
            name: civil_engineerings_schema_1.CivilEngineerings.name,
            schema: civil_engineerings_schema_1.CivilEngineeringsSchema,
          },
          {
            name: cooperate_attorneys_schema_1.CooperateAttorneys.name,
            schema: cooperate_attorneys_schema_1.CooperateAttorneysSchema,
          },
          { name: hrs_schema_1.Hrs.name, schema: hrs_schema_1.HrsSchema },
          {
            name: operations_schema_1.Operations.name,
            schema: operations_schema_1.OperationsSchema,
          },
          {
            name: procurements_schema_1.Procurements.name,
            schema: procurements_schema_1.ProcurementsSchema,
          },
          {
            name: project_manager_executive_schema_1.ProjectManagerExecutive
              .name,
            schema:
              project_manager_executive_schema_1.ProjectManagerExecutiveSchema,
          },
          {
            name: sales_executive_schema_1.SalesExecutive.name,
            schema: sales_executive_schema_1.SalesExecutiveSchema,
          },
        ]),
      ],
      controllers: [career_controller_1.CareerController],
      providers: [career_service_1.CareerService],
    }),
  ],
  CareerModule,
);
//# sourceMappingURL=career.module.js.map
