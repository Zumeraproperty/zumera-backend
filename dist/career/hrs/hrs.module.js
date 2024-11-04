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
exports.HrsModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const hrs_controller_1 = require("./hrs.controller");
const hrs_service_1 = require("./hrs.service");
const hrs_schema_1 = require("./schemas/hrs.schema");
let HrsModule = class HrsModule {};
exports.HrsModule = HrsModule;
exports.HrsModule = HrsModule = __decorate(
  [
    (0, common_1.Module)({
      imports: [
        mongoose_1.MongooseModule.forFeature([
          { name: hrs_schema_1.Hrs.name, schema: hrs_schema_1.HrsSchema },
        ]),
      ],
      controllers: [hrs_controller_1.HrsController],
      providers: [hrs_service_1.HrsService],
    }),
  ],
  HrsModule,
);
//# sourceMappingURL=hrs.module.js.map
