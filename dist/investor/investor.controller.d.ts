import { InvestorService } from "./investor.service";
import { CreateInvestorDto } from "./dto/create-investor.dto";
export declare class InvestorController {
  private readonly investorService;
  constructor(investorService: InvestorService);
  create(
    createInvestorDto: CreateInvestorDto,
  ): Promise<import("./schemas/investor.shema").Investor>;
  findAll(): Promise<import("./schemas/investor.shema").Investor[]>;
}
