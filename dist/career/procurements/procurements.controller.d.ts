import { ProcurementsService } from "./procurements.service";
import { CreateProcurementsDto } from "./dto/create-procurements.dto";
export declare class ProcurementsController {
  private readonly procurementsService;
  constructor(procurementsService: ProcurementsService);
  create(
    createProcurementsDto: CreateProcurementsDto,
  ): Promise<import("./schemas/procurements.schema").Procurements>;
  findAll(): Promise<import("./schemas/procurements.schema").Procurements[]>;
  update(
    id: string,
    updateData: CreateProcurementsDto,
  ): Promise<import("./schemas/procurements.schema").Procurements>;
  remove(
    id: string,
  ): Promise<import("./schemas/procurements.schema").Procurements>;
}
