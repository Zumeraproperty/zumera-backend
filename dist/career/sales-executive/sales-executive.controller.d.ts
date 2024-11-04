import { SalesExecutiveService } from "./sales-executive.service";
import { CreateSalesExecutiveDto } from "./dto/create-sales-executive.dto";
export declare class SalesExecutiveController {
  private readonly salesExecutiveService;
  constructor(salesExecutiveService: SalesExecutiveService);
  create(
    createSalesExecutiveDto: CreateSalesExecutiveDto,
  ): Promise<import("./schemas/sales-executive.schema").SalesExecutive>;
  findAll(): Promise<
    import("./schemas/sales-executive.schema").SalesExecutive[]
  >;
  update(
    id: string,
    updateData: CreateSalesExecutiveDto,
  ): Promise<import("./schemas/sales-executive.schema").SalesExecutive>;
  remove(
    id: string,
  ): Promise<import("./schemas/sales-executive.schema").SalesExecutive>;
}
