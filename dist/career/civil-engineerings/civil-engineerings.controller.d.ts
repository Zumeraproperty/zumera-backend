import { CivilEngineeringsService } from "./civil-engineerings.service";
import { CreateCivilEngineeringsDto } from "./dto/create-civil-engineerings.dto";
export declare class CivilEngineeringsController {
  private readonly civilEngineeringsService;
  constructor(civilEngineeringsService: CivilEngineeringsService);
  create(
    createCivilEngineeringsDto: CreateCivilEngineeringsDto,
  ): Promise<import("./schemas/civil-engineerings.schema").CivilEngineerings>;
  findAll(): Promise<
    import("./schemas/civil-engineerings.schema").CivilEngineerings[]
  >;
  update(
    id: string,
    updateData: CreateCivilEngineeringsDto,
  ): Promise<import("./schemas/civil-engineerings.schema").CivilEngineerings>;
  remove(
    id: string,
  ): Promise<import("./schemas/civil-engineerings.schema").CivilEngineerings>;
}
