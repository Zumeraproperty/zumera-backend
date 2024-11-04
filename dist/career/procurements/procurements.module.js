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
exports.ProcurementsModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const procurements_controller_1 = require("./procurements.controller");
const procurements_service_1 = require("./procurements.service");
const procurements_schema_1 = require("./schemas/procurements.schema");
let ProcurementsModule = class ProcurementsModule {};
exports.ProcurementsModule = ProcurementsModule;
exports.ProcurementsModule = ProcurementsModule = __decorate(
  [
    (0, common_1.Module)({
      imports: [
        mongoose_1.MongooseModule.forFeature([
          {
            name: procurements_schema_1.Procurements.name,
            schema: procurements_schema_1.ProcurementsSchema,
          },
        ]),
      ],
      controllers: [procurements_controller_1.ProcurementsController],
      providers: [procurements_service_1.ProcurementsService],
    }),
  ],
  ProcurementsModule,
);
//# sourceMappingURL=procurements.module.js.map
