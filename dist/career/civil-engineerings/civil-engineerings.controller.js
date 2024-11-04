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
exports.CivilEngineeringsController = void 0;
const common_1 = require("@nestjs/common");
const civil_engineerings_service_1 = require("./civil-engineerings.service");
const create_civil_engineerings_dto_1 = require("./dto/create-civil-engineerings.dto");
let CivilEngineeringsController = class CivilEngineeringsController {
  constructor(civilEngineeringsService) {
    this.civilEngineeringsService = civilEngineeringsService;
  }
  create(createCivilEngineeringsDto) {
    return this.civilEngineeringsService.create(createCivilEngineeringsDto);
  }
  findAll() {
    return this.civilEngineeringsService.findAll();
  }
  update(id, updateData) {
    return this.civilEngineeringsService.update(id, updateData);
  }
  remove(id) {
    return this.civilEngineeringsService.remove(id);
  }
};
exports.CivilEngineeringsController = CivilEngineeringsController;
__decorate(
  [
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [
      create_civil_engineerings_dto_1.CreateCivilEngineeringsDto,
    ]),
    __metadata("design:returntype", void 0),
  ],
  CivilEngineeringsController.prototype,
  "create",
  null,
);
__decorate(
  [
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0),
  ],
  CivilEngineeringsController.prototype,
  "findAll",
  null,
);
__decorate(
  [
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [
      String,
      create_civil_engineerings_dto_1.CreateCivilEngineeringsDto,
    ]),
    __metadata("design:returntype", void 0),
  ],
  CivilEngineeringsController.prototype,
  "update",
  null,
);
__decorate(
  [
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0),
  ],
  CivilEngineeringsController.prototype,
  "remove",
  null,
);
exports.CivilEngineeringsController = CivilEngineeringsController = __decorate(
  [
    (0, common_1.Controller)("civil-engineerings"),
    __metadata("design:paramtypes", [
      civil_engineerings_service_1.CivilEngineeringsService,
    ]),
  ],
  CivilEngineeringsController,
);
//# sourceMappingURL=civil-engineerings.controller.js.map
