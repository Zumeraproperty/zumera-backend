"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HrsController = void 0;
const common_1 = require("@nestjs/common");
const hrs_service_1 = require("./hrs.service");
const create_hrs_dto_1 = require("./dto/create-hrs.dto");
let HrsController = class HrsController {
    constructor(hrsService) {
        this.hrsService = hrsService;
    }
    create(createHrsDto) {
        return this.hrsService.create(createHrsDto);
    }
    findAll() {
        return this.hrsService.findAll();
    }
    update(id, updateData) {
        return this.hrsService.update(id, updateData);
    }
    remove(id) {
        return this.hrsService.remove(id);
    }
};
exports.HrsController = HrsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_hrs_dto_1.CreateHrsDto]),
    __metadata("design:returntype", void 0)
], HrsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HrsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_hrs_dto_1.CreateHrsDto]),
    __metadata("design:returntype", void 0)
], HrsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HrsController.prototype, "remove", null);
exports.HrsController = HrsController = __decorate([
    (0, common_1.Controller)('hrs'),
    __metadata("design:paramtypes", [hrs_service_1.HrsService])
], HrsController);
//# sourceMappingURL=hrs.controller.js.map