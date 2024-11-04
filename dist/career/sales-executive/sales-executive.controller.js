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
exports.SalesExecutiveController = void 0;
const common_1 = require("@nestjs/common");
const sales_executive_service_1 = require("./sales-executive.service");
const create_sales_executive_dto_1 = require("./dto/create-sales-executive.dto");
let SalesExecutiveController = class SalesExecutiveController {
  constructor(salesExecutiveService) {
    this.salesExecutiveService = salesExecutiveService;
  }
  create(createSalesExecutiveDto) {
    return this.salesExecutiveService.create(createSalesExecutiveDto);
  }
  findAll() {
    return this.salesExecutiveService.findAll();
  }
  update(id, updateData) {
    return this.salesExecutiveService.update(id, updateData);
  }
  remove(id) {
    return this.salesExecutiveService.remove(id);
  }
};
exports.SalesExecutiveController = SalesExecutiveController;
__decorate(
  [
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [
      create_sales_executive_dto_1.CreateSalesExecutiveDto,
    ]),
    __metadata("design:returntype", void 0),
  ],
  SalesExecutiveController.prototype,
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
  SalesExecutiveController.prototype,
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
      create_sales_executive_dto_1.CreateSalesExecutiveDto,
    ]),
    __metadata("design:returntype", void 0),
  ],
  SalesExecutiveController.prototype,
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
  SalesExecutiveController.prototype,
  "remove",
  null,
);
exports.SalesExecutiveController = SalesExecutiveController = __decorate(
  [
    (0, common_1.Controller)("sales-executive"),
    __metadata("design:paramtypes", [
      sales_executive_service_1.SalesExecutiveService,
    ]),
  ],
  SalesExecutiveController,
);
//# sourceMappingURL=sales-executive.controller.js.map
