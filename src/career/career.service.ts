import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AccountingAndFinances } from './accounting-and-finances/schemas/accounting-and-finances.schema';
import { ArchitectureAndDesigns } from './architecture-and-designs/schemas/architecture-and-designs.schema';
import { CivilEngineerings } from './civil-engineerings/schemas/civil-engineerings.schema';
import { CooperateAttorneys } from './cooperate-attorneys/schemas/cooperate-attorneys.schema';
import { Hrs } from './hrs/schemas/hrs.schema';
import { Operations } from './operations/schemas/operations.schema';
import { Procurements } from './procurements/schemas/procurements.schema';
import { ProjectManagerExecutive } from './project-manager-executive/schemas/project-manager-executive.schema';
import { SalesExecutive } from './sales-executive/schemas/sales-executive.schema';

@Injectable()
export class CareerService {
  constructor(
    @InjectModel(AccountingAndFinances.name)
    private accountingModel: Model<AccountingAndFinances>,
    @InjectModel(ArchitectureAndDesigns.name)
    private architectureModel: Model<ArchitectureAndDesigns>,
    @InjectModel(CivilEngineerings.name)
    private civilModel: Model<CivilEngineerings>,
    @InjectModel(CooperateAttorneys.name)
    private attorneyModel: Model<CooperateAttorneys>,
    @InjectModel(Hrs.name) private hrModel: Model<Hrs>,
    @InjectModel(Operations.name) private operationsModel: Model<Operations>,
    @InjectModel(Procurements.name)
    private procurementModel: Model<Procurements>,
    @InjectModel(ProjectManagerExecutive.name)
    private projectManagerModel: Model<ProjectManagerExecutive>,
    @InjectModel(SalesExecutive.name) private salesModel: Model<SalesExecutive>,
  ) {}

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

  async deleteJob(id: string) {
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

  async updateJob(id: string, updateData: any) {
    const options = { new: true };

    const results = await Promise.all([
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

    // Filter out null results and return the first found updated document
    return results.find((result) => result !== null);
  }

  async findOneJob(id: string) {
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
}
