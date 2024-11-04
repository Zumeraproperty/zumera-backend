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
exports.JobApplicationController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const job_application_service_1 = require("./job-application.service");
const create_application_dto_1 = require("./dto/create-application.dto");
const swagger_1 = require("@nestjs/swagger");
let JobApplicationController = class JobApplicationController {
    constructor(jobApplicationService) {
        this.jobApplicationService = jobApplicationService;
    }
    async create(file, createApplicationDto) {
        if (!file) {
            throw new common_1.HttpException('No file uploaded', common_1.HttpStatus.BAD_REQUEST);
        }
        if (file.mimetype !== 'application/pdf') {
            throw new common_1.HttpException('Invalid file format. Only PDF files are allowed', common_1.HttpStatus.BAD_REQUEST);
        }
        return this.jobApplicationService.create(file, createApplicationDto);
    }
    async findAll() {
        return this.jobApplicationService.findAll();
    }
    async findOne(id) {
        return this.jobApplicationService.findOne(id);
    }
    async remove(id) {
        return this.jobApplicationService.remove(id);
    }
};
exports.JobApplicationController = JobApplicationController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('pdfFile')),
    (0, swagger_1.ApiOperation)({ summary: 'Submit a job application' }),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_application_dto_1.CreateApplicationDto]),
    __metadata("design:returntype", Promise)
], JobApplicationController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all job applications' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], JobApplicationController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a single job application' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], JobApplicationController.prototype, "findOne", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a job application' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], JobApplicationController.prototype, "remove", null);
exports.JobApplicationController = JobApplicationController = __decorate([
    (0, swagger_1.ApiTags)('job-applications'),
    (0, common_1.Controller)('application'),
    __metadata("design:paramtypes", [job_application_service_1.JobApplicationService])
], JobApplicationController);
//# sourceMappingURL=job-application.controller.js.map