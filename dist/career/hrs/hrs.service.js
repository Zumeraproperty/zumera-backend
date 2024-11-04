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
exports.HrsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const hrs_schema_1 = require("./schemas/hrs.schema");
let HrsService = class HrsService {
    constructor(hrsModel) {
        this.hrsModel = hrsModel;
    }
    async create(createHrsDto) {
        const createdHrs = new this.hrsModel(createHrsDto);
        return createdHrs.save();
    }
    async findAll() {
        return this.hrsModel.find().exec();
    }
    async update(id, updateData) {
        if (!this.isUpdateDataComplete(updateData)) {
            throw new common_1.BadRequestException('All fields must be provided for update');
        }
        const updatedHrs = await this.hrsModel
            .findByIdAndUpdate(id, updateData, { new: true })
            .exec();
        if (!updatedHrs) {
            throw new common_1.NotFoundException(`Hrs with ID "${id}" not found`);
        }
        return updatedHrs;
    }
    isUpdateDataComplete(data) {
        return !!(data.title &&
            data.description &&
            data.skill &&
            data.requirements);
    }
    async remove(id) {
        const deletedHrs = await this.hrsModel.findByIdAndDelete(id).exec();
        if (!deletedHrs) {
            throw new common_1.NotFoundException(`Project Manager Executive with ID "${id}" not found`);
        }
        return deletedHrs;
    }
};
exports.HrsService = HrsService;
exports.HrsService = HrsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(hrs_schema_1.Hrs.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], HrsService);
//# sourceMappingURL=hrs.service.js.map