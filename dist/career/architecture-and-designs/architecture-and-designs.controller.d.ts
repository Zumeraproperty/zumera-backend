import { ArchitectureAndDesignsService } from "./architecture-and-designs.service";
import { CreateArchitectureAndDesignsDto } from "./dto/create-architecture-and-designs.dto";
export declare class ArchitectureAndDesignsController {
  private readonly architectureAndDesignsService;
  constructor(architectureAndDesignsService: ArchitectureAndDesignsService);
  create(
    createArchitectureAndDesignsDto: CreateArchitectureAndDesignsDto,
  ): Promise<
    import("./schemas/architecture-and-designs.schema").ArchitectureAndDesigns
  >;
  findAll(): Promise<
    import("./schemas/architecture-and-designs.schema").ArchitectureAndDesigns[]
  >;
  update(
    id: string,
    updateData: CreateArchitectureAndDesignsDto,
  ): Promise<
    import("./schemas/architecture-and-designs.schema").ArchitectureAndDesigns
  >;
  remove(
    id: string,
  ): Promise<
    import("./schemas/architecture-and-designs.schema").ArchitectureAndDesigns
  >;
}
