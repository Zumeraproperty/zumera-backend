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
exports.CareerService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const accounting_and_finances_schema_1 = require("./accounting-and-finances/schemas/accounting-and-finances.schema");
const architecture_and_designs_schema_1 = require("./architecture-and-designs/schemas/architecture-and-designs.schema");
const civil_engineerings_schema_1 = require("./civil-engineerings/schemas/civil-engineerings.schema");
const cooperate_attorneys_schema_1 = require("./cooperate-attorneys/schemas/cooperate-attorneys.schema");
const hrs_schema_1 = require("./hrs/schemas/hrs.schema");
const operations_schema_1 = require("./operations/schemas/operations.schema");
const procurements_schema_1 = require("./procurements/schemas/procurements.schema");
const project_manager_executive_schema_1 = require("./project-manager-executive/schemas/project-manager-executive.schema");
const sales_executive_schema_1 = require("./sales-executive/schemas/sales-executive.schema");
let CareerService = class CareerService {
    constructor(accountingModel, architectureModel, civilModel, attorneyModel, hrModel, operationsModel, procurementModel, projectManagerModel, salesModel) {
        this.accountingModel = accountingModel;
        this.architectureModel = architectureModel;
        this.civilModel = civilModel;
        this.attorneyModel = attorneyModel;
        this.hrModel = hrModel;
        this.operationsModel = operationsModel;
        this.procurementModel = procurementModel;
        this.projectManagerModel = projectManagerModel;
        this.salesModel = salesModel;
    }
    async findAllJobs() {
        return {
            AccountingAndFinances: await this.accountingModel.find().exec(),
            ArchitectureAndDesigns: await this.architectureModel.find().exec(),
            CivilEngineerings: await this.civilModel.find().exec(),
            CooperateAttorneys: await this.attorneyModel.find().exec(),
            Hrs: await this.hrModel.find().exec(),
            Operations: await this.operationsModel.find().exec(),
            Procurements: await this.procurementModel.find().exec(),
            ProjectManagerExecutives: await this.projectManagerModel.find().exec(),
            SalesExecutives: await this.salesModel.find().exec(),
        };
    }
    async deleteJob(id) {
        await Promise.all([
            this.accountingModel.findByIdAndDelete(id).exec(),
            this.architectureModel.findByIdAndDelete(id).exec(),
            this.civilModel.findByIdAndDelete(id).exec(),
            this.attorneyModel.findByIdAndDelete(id).exec(),
            this.hrModel.findByIdAndDelete(id).exec(),
            this.operationsModel.findByIdAndDelete(id).exec(),
            this.procurementModel.findByIdAndDelete(id).exec(),
            this.projectManagerModel.findByIdAndDelete(id).exec(),
            this.salesModel.findByIdAndDelete(id).exec(),
        ]);
    }
    async updateJob(id, updateData) {
        const options = { new: true };
        await Promise.all([
            this.accountingModel.findByIdAndUpdate(id, updateData, options).exec(),
            this.architectureModel.findByIdAndUpdate(id, updateData, options).exec(),
            this.civilModel.findByIdAndUpdate(id, updateData, options).exec(),
            this.attorneyModel.findByIdAndUpdate(id, updateData, options).exec(),
            this.hrModel.findByIdAndUpdate(id, updateData, options).exec(),
            this.operationsModel.findByIdAndUpdate(id, updateData, options).exec(),
            this.procurementModel.findByIdAndUpdate(id, updateData, options).exec(),
            this.projectManagerModel
                .findByIdAndUpdate(id, updateData, options)
                .exec(),
            this.salesModel.findByIdAndUpdate(id, updateData, options).exec(),
        ]);
    }
    async findOneJob(id) {
        const models = [
            { name: 'AccountingAndFinances', model: this.accountingModel },
            { name: 'ArchitectureAndDesigns', model: this.architectureModel },
            { name: 'CivilEngineerings', model: this.civilModel },
            { name: 'CooperateAttorneys', model: this.attorneyModel },
            { name: 'Hrs', model: this.hrModel },
            { name: 'Operations', model: this.operationsModel },
            { name: 'Procurements', model: this.procurementModel },
            { name: 'ProjectManagerExecutive', model: this.projectManagerModel },
            { name: 'SalesExecutive', model: this.salesModel },
        ];
        for (const { name, model } of models) {
            const data = await model.findById(id).exec();
            if (data) {
                return { [name]: data };
            }
        }
        return {};
    }
};
exports.CareerService = CareerService;
exports.CareerService = CareerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(accounting_and_finances_schema_1.AccountingAndFinances.name)),
    __param(1, (0, mongoose_1.InjectModel)(architecture_and_designs_schema_1.ArchitectureAndDesigns.name)),
    __param(2, (0, mongoose_1.InjectModel)(civil_engineerings_schema_1.CivilEngineerings.name)),
    __param(3, (0, mongoose_1.InjectModel)(cooperate_attorneys_schema_1.CooperateAttorneys.name)),
    __param(4, (0, mongoose_1.InjectModel)(hrs_schema_1.Hrs.name)),
    __param(5, (0, mongoose_1.InjectModel)(operations_schema_1.Operations.name)),
    __param(6, (0, mongoose_1.InjectModel)(procurements_schema_1.Procurements.name)),
    __param(7, (0, mongoose_1.InjectModel)(project_manager_executive_schema_1.ProjectManagerExecutive.name)),
    __param(8, (0, mongoose_1.InjectModel)(sales_executive_schema_1.SalesExecutive.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], CareerService);
//# sourceMappingURL=career.service.js.map