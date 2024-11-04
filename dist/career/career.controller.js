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
exports.CareerController = void 0;
const common_1 = require("@nestjs/common");
const career_service_1 = require("./career.service");
let CareerController = class CareerController {
    constructor(careerService) {
        this.careerService = careerService;
    }
    async getAllJobs() {
        try {
            return await this.careerService.findAllJobs();
        }
        catch (error) {
            throw new common_1.HttpException('Internal Server Error', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async deleteJob(id) {
        try {
            await this.careerService.deleteJob(id);
            return { message: 'Deleted successfully' };
        }
        catch (error) {
            throw new common_1.HttpException('Internal Server Error', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async updateJob(id, updateData) {
        try {
            await this.careerService.updateJob(id, updateData[id]);
            return { message: 'Updated successfully' };
        }
        catch (error) {
            throw new common_1.HttpException('Internal Server Error', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getJob(id) {
        try {
            return await this.careerService.findOneJob(id);
        }
        catch (error) {
            throw new common_1.HttpException('Internal Server Error', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.CareerController = CareerController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CareerController.prototype, "getAllJobs", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CareerController.prototype, "deleteJob", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CareerController.prototype, "updateJob", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CareerController.prototype, "getJob", null);
exports.CareerController = CareerController = __decorate([
    (0, common_1.Controller)('career'),
    __metadata("design:paramtypes", [career_service_1.CareerService])
], CareerController);
//# sourceMappingURL=career.controller.js.map