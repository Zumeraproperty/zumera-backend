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
exports.CooperateAttorneysController = void 0;
const common_1 = require("@nestjs/common");
const cooperate_attorneys_service_1 = require("./cooperate-attorneys.service");
const create_cooperate_attorneys_dto_1 = require("./dto/create-cooperate-attorneys.dto");
let CooperateAttorneysController = class CooperateAttorneysController {
    constructor(cooperateAttorneysService) {
        this.cooperateAttorneysService = cooperateAttorneysService;
    }
    create(createCooperateAttorneysDto) {
        return this.cooperateAttorneysService.create(createCooperateAttorneysDto);
    }
    findAll() {
        return this.cooperateAttorneysService.findAll();
    }
    update(id, updateData) {
        return this.cooperateAttorneysService.update(id, updateData);
    }
    remove(id) {
        return this.cooperateAttorneysService.remove(id);
    }
};
exports.CooperateAttorneysController = CooperateAttorneysController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_cooperate_attorneys_dto_1.CreateCooperateAttorneysDto]),
    __metadata("design:returntype", void 0)
], CooperateAttorneysController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CooperateAttorneysController.prototype, "findAll", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_cooperate_attorneys_dto_1.CreateCooperateAttorneysDto]),
    __metadata("design:returntype", void 0)
], CooperateAttorneysController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CooperateAttorneysController.prototype, "remove", null);
exports.CooperateAttorneysController = CooperateAttorneysController = __decorate([
    (0, common_1.Controller)('cooperate-attorneys'),
    __metadata("design:paramtypes", [cooperate_attorneys_service_1.CooperateAttorneysService])
], CooperateAttorneysController);
//# sourceMappingURL=cooperate-attorneys.controller.js.map