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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcurementsSchema = exports.Procurements = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Procurements = class Procurements {};
exports.Procurements = Procurements;
__decorate(
  [(0, mongoose_1.Prop)({ required: true }), __metadata("design:type", String)],
  Procurements.prototype,
  "title",
  void 0,
);
__decorate(
  [(0, mongoose_1.Prop)({ required: true }), __metadata("design:type", String)],
  Procurements.prototype,
  "description",
  void 0,
);
__decorate(
  [
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String),
  ],
  Procurements.prototype,
  "skill",
  void 0,
);
__decorate(
  [
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String),
  ],
  Procurements.prototype,
  "requirements",
  void 0,
);
exports.Procurements = Procurements = __decorate(
  [(0, mongoose_1.Schema)()],
  Procurements,
);
exports.ProcurementsSchema =
  mongoose_1.SchemaFactory.createForClass(Procurements);
//# sourceMappingURL=procurements.schema.js.map
