import { AccountingAndFinancesService } from './accounting-and-finances.service';
import { CreateAccountingAndFinancesDto } from './dto/create-accounting-and-finances.dto';
export declare class AccountingAndFinancesController {
    private readonly accountingAndFinancesService;
    constructor(accountingAndFinancesService: AccountingAndFinancesService);
    create(createAccountingAndFinancesDto: CreateAccountingAndFinancesDto): Promise<import("./schemas/accounting-and-finances.schema").AccountingAndFinances>;
    findAll(): Promise<import("./schemas/accounting-and-finances.schema").AccountingAndFinances[]>;
    update(id: string, updateData: CreateAccountingAndFinancesDto): Promise<import("./schemas/accounting-and-finances.schema").AccountingAndFinances>;
    remove(id: string): Promise<import("./schemas/accounting-and-finances.schema").AccountingAndFinances>;
}
