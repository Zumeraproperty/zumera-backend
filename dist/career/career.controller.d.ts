import { CareerService } from "./career.service";
export declare class CareerController {
  private readonly careerService;
  constructor(careerService: CareerService);
  getAllJobs(): Promise<{
    AccountingAndFinances: (import("mongoose").Document<
      unknown,
      {},
      import("./accounting-and-finances/schemas/accounting-and-finances.schema").AccountingAndFinances
    > &
      import("./accounting-and-finances/schemas/accounting-and-finances.schema").AccountingAndFinances & {
        _id: import("mongoose").Types.ObjectId;
      } & {
        __v?: number;
      })[];
    ArchitectureAndDesigns: (import("mongoose").Document<
      unknown,
      {},
      import("./architecture-and-designs/schemas/architecture-and-designs.schema").ArchitectureAndDesigns
    > &
      import("./architecture-and-designs/schemas/architecture-and-designs.schema").ArchitectureAndDesigns & {
        _id: import("mongoose").Types.ObjectId;
      } & {
        __v?: number;
      })[];
    CivilEngineerings: (import("mongoose").Document<
      unknown,
      {},
      import("./civil-engineerings/schemas/civil-engineerings.schema").CivilEngineerings
    > &
      import("./civil-engineerings/schemas/civil-engineerings.schema").CivilEngineerings & {
        _id: import("mongoose").Types.ObjectId;
      } & {
        __v?: number;
      })[];
    CooperateAttorneys: (import("mongoose").Document<
      unknown,
      {},
      import("./cooperate-attorneys/schemas/cooperate-attorneys.schema").CooperateAttorneys
    > &
      import("./cooperate-attorneys/schemas/cooperate-attorneys.schema").CooperateAttorneys & {
        _id: import("mongoose").Types.ObjectId;
      } & {
        __v?: number;
      })[];
    Hrs: (import("mongoose").Document<
      unknown,
      {},
      import("./hrs/schemas/hrs.schema").Hrs
    > &
      import("./hrs/schemas/hrs.schema").Hrs & {
        _id: import("mongoose").Types.ObjectId;
      } & {
        __v?: number;
      })[];
    Operations: (import("mongoose").Document<
      unknown,
      {},
      import("./operations/schemas/operations.schema").Operations
    > &
      import("./operations/schemas/operations.schema").Operations & {
        _id: import("mongoose").Types.ObjectId;
      } & {
        __v?: number;
      })[];
    Procurements: (import("mongoose").Document<
      unknown,
      {},
      import("./procurements/schemas/procurements.schema").Procurements
    > &
      import("./procurements/schemas/procurements.schema").Procurements & {
        _id: import("mongoose").Types.ObjectId;
      } & {
        __v?: number;
      })[];
    ProjectManagerExecutives: (import("mongoose").Document<
      unknown,
      {},
      import("./project-manager-executive/schemas/project-manager-executive.schema").ProjectManagerExecutive
    > &
      import("./project-manager-executive/schemas/project-manager-executive.schema").ProjectManagerExecutive & {
        _id: import("mongoose").Types.ObjectId;
      } & {
        __v?: number;
      })[];
    SalesExecutives: (import("mongoose").Document<
      unknown,
      {},
      import("./sales-executive/schemas/sales-executive.schema").SalesExecutive
    > &
      import("./sales-executive/schemas/sales-executive.schema").SalesExecutive & {
        _id: import("mongoose").Types.ObjectId;
      } & {
        __v?: number;
      })[];
  }>;
  deleteJob(id: string): Promise<{
    message: string;
  }>;
  updateJob(
    id: string,
    updateData: any,
  ): Promise<{
    message: string;
  }>;
  getJob(id: string): Promise<{
    [x: string]: import("mongoose").Document<
      unknown,
      {},
      import("./accounting-and-finances/schemas/accounting-and-finances.schema").AccountingAndFinances
    > &
      import("./accounting-and-finances/schemas/accounting-and-finances.schema").AccountingAndFinances & {
        _id: import("mongoose").Types.ObjectId;
      } & {
        __v?: number;
      };
  }>;
}
