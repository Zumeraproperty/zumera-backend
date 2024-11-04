import { JobApplicationService } from "./job-application.service";
import { CreateApplicationDto } from "./dto/create-application.dto";
export declare class JobApplicationController {
  private readonly jobApplicationService;
  constructor(jobApplicationService: JobApplicationService);
  create(
    file: Express.Multer.File,
    createApplicationDto: CreateApplicationDto,
  ): Promise<
    import("mongoose").Document<
      unknown,
      {},
      import("./schemas/applied.schema").Applied
    > &
      import("./schemas/applied.schema").Applied &
      Required<{
        _id: unknown;
      }> & {
        __v?: number;
      }
  >;
  findAll(): Promise<
    (import("mongoose").Document<
      unknown,
      {},
      import("./schemas/applied.schema").Applied
    > &
      import("./schemas/applied.schema").Applied &
      Required<{
        _id: unknown;
      }> & {
        __v?: number;
      })[]
  >;
  findOne(id: string): Promise<
    import("mongoose").Document<
      unknown,
      {},
      import("./schemas/applied.schema").Applied
    > &
      import("./schemas/applied.schema").Applied &
      Required<{
        _id: unknown;
      }> & {
        __v?: number;
      }
  >;
  remove(id: string): Promise<
    import("mongoose").Document<
      unknown,
      {},
      import("./schemas/applied.schema").Applied
    > &
      import("./schemas/applied.schema").Applied &
      Required<{
        _id: unknown;
      }> & {
        __v?: number;
      }
  >;
}
