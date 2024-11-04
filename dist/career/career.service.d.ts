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
export declare class CareerService {
    private accountingModel;
    private architectureModel;
    private civilModel;
    private attorneyModel;
    private hrModel;
    private operationsModel;
    private procurementModel;
    private projectManagerModel;
    private salesModel;
    constructor(accountingModel: Model<AccountingAndFinances>, architectureModel: Model<ArchitectureAndDesigns>, civilModel: Model<CivilEngineerings>, attorneyModel: Model<CooperateAttorneys>, hrModel: Model<Hrs>, operationsModel: Model<Operations>, procurementModel: Model<Procurements>, projectManagerModel: Model<ProjectManagerExecutive>, salesModel: Model<SalesExecutive>);
    findAllJobs(): Promise<{
        AccountingAndFinances: (import("mongoose").Document<unknown, {}, AccountingAndFinances> & AccountingAndFinances & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v?: number;
        })[];
        ArchitectureAndDesigns: (import("mongoose").Document<unknown, {}, ArchitectureAndDesigns> & ArchitectureAndDesigns & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v?: number;
        })[];
        CivilEngineerings: (import("mongoose").Document<unknown, {}, CivilEngineerings> & CivilEngineerings & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v?: number;
        })[];
        CooperateAttorneys: (import("mongoose").Document<unknown, {}, CooperateAttorneys> & CooperateAttorneys & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v?: number;
        })[];
        Hrs: (import("mongoose").Document<unknown, {}, Hrs> & Hrs & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v?: number;
        })[];
        Operations: (import("mongoose").Document<unknown, {}, Operations> & Operations & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v?: number;
        })[];
        Procurements: (import("mongoose").Document<unknown, {}, Procurements> & Procurements & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v?: number;
        })[];
        ProjectManagerExecutives: (import("mongoose").Document<unknown, {}, ProjectManagerExecutive> & ProjectManagerExecutive & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v?: number;
        })[];
        SalesExecutives: (import("mongoose").Document<unknown, {}, SalesExecutive> & SalesExecutive & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v?: number;
        })[];
    }>;
    deleteJob(id: string): Promise<void>;
    updateJob(id: string, updateData: any): Promise<void>;
    findOneJob(id: string): Promise<{
        [x: string]: import("mongoose").Document<unknown, {}, AccountingAndFinances> & AccountingAndFinances & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v?: number;
        };
    }>;
}
