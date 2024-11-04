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
exports.CooperateAttorneysService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const cooperate_attorneys_schema_1 = require("./schemas/cooperate-attorneys.schema");
let CooperateAttorneysService = class CooperateAttorneysService {
    constructor(cooperateAttorneysModel) {
        this.cooperateAttorneysModel = cooperateAttorneysModel;
    }
    async create(createCooperateAttorneysDto) {
        const createdCooperateAttorneys = new this.cooperateAttorneysModel(createCooperateAttorneysDto);
        return createdCooperateAttorneys.save();
    }
    async findAll() {
        return this.cooperateAttorneysModel.find().exec();
    }
    async update(id, updateData) {
        if (!this.isUpdateDataComplete(updateData)) {
            throw new common_1.BadRequestException('All fields must be provided for update');
        }
        const updatedCooperateAttorneys = await this.cooperateAttorneysModel
            .findByIdAndUpdate(id, updateData, { new: true })
            .exec();
        if (!updatedCooperateAttorneys) {
            throw new common_1.NotFoundException(`Cooperate Attorneys with ID "${id}" not found`);
        }
        return updatedCooperateAttorneys;
    }
    isUpdateDataComplete(data) {
        return !!(data.title &&
            data.description &&
            data.skill &&
            data.requirements);
    }
    async remove(id) {
        const deletedCooperateAttorneys = await this.cooperateAttorneysModel
            .findByIdAndDelete(id)
            .exec();
        if (!deletedCooperateAttorneys) {
            throw new common_1.NotFoundException(`Cooperate Attorneys with ID "${id}" not found`);
        }
        return deletedCooperateAttorneys;
    }
};
exports.CooperateAttorneysService = CooperateAttorneysService;
exports.CooperateAttorneysService = CooperateAttorneysService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(cooperate_attorneys_schema_1.CooperateAttorneys.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CooperateAttorneysService);
//# sourceMappingURL=cooperate-attorneys.service.js.map