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
exports.ArchitectureAndDesignsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const architecture_and_designs_schema_1 = require("./schemas/architecture-and-designs.schema");
let ArchitectureAndDesignsService = class ArchitectureAndDesignsService {
    constructor(architectureAndDesignsModel) {
        this.architectureAndDesignsModel = architectureAndDesignsModel;
    }
    async create(createArchitectureAndDesignsDto) {
        const createdArchitectureAndDesigns = new this.architectureAndDesignsModel(createArchitectureAndDesignsDto);
        return createdArchitectureAndDesigns.save();
    }
    async findAll() {
        return this.architectureAndDesignsModel.find().exec();
    }
    async update(id, updateData) {
        if (!this.isUpdateDataComplete(updateData)) {
            throw new common_1.BadRequestException('All fields must be provided for update');
        }
        const updatedArchitectureAndDesigns = await this.architectureAndDesignsModel
            .findByIdAndUpdate(id, updateData, { new: true })
            .exec();
        if (!updatedArchitectureAndDesigns) {
            throw new common_1.NotFoundException(`Architecture and Designs with ID "${id}" not found`);
        }
        return updatedArchitectureAndDesigns;
    }
    isUpdateDataComplete(data) {
        return !!(data.title &&
            data.description &&
            data.skill &&
            data.requirements);
    }
    async remove(id) {
        const deletedArchitectureAndDesigns = await this.architectureAndDesignsModel
            .findByIdAndDelete(id)
            .exec();
        if (!deletedArchitectureAndDesigns) {
            throw new common_1.NotFoundException(`Architecture and Designs with ID "${id}" not found`);
        }
        return deletedArchitectureAndDesigns;
    }
};
exports.ArchitectureAndDesignsService = ArchitectureAndDesignsService;
exports.ArchitectureAndDesignsService = ArchitectureAndDesignsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(architecture_and_designs_schema_1.ArchitectureAndDesigns.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ArchitectureAndDesignsService);
//# sourceMappingURL=architecture-and-designs.service.js.map