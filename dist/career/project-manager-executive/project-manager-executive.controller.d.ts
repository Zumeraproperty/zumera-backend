import { ProjectManagerExecutiveService } from "./project-manager-executive.service";
import { CreateProjectManagerExecutiveDto } from "./dto/create-project-manager-executive.dto";
export declare class ProjectManagerExecutiveController {
  private readonly projectManagerExecutiveService;
  constructor(projectManagerExecutiveService: ProjectManagerExecutiveService);
  create(
    createProjectManagerExecutiveDto: CreateProjectManagerExecutiveDto,
  ): Promise<
    import("./schemas/project-manager-executive.schema").ProjectManagerExecutive
  >;
  findAll(): Promise<
    import("./schemas/project-manager-executive.schema").ProjectManagerExecutive[]
  >;
  update(
    id: string,
    updateData: CreateProjectManagerExecutiveDto,
  ): Promise<
    import("./schemas/project-manager-executive.schema").ProjectManagerExecutive
  >;
  remove(
    id: string,
  ): Promise<
    import("./schemas/project-manager-executive.schema").ProjectManagerExecutive
  >;
}
