import { Model } from "mongoose";
import {
  AccountingAndFinances,
  AccountingAndFinancesDocument,
} from "./schemas/accounting-and-finances.schema";
import { CreateAccountingAndFinancesDto } from "./dto/create-accounting-and-finances.dto";
export declare class AccountingAndFinancesService {
  private accountingAndFinancesModel;
  constructor(accountingAndFinancesModel: Model<AccountingAndFinancesDocument>);
  create(
    createAccountingAndFinancesDto: CreateAccountingAndFinancesDto,
  ): Promise<AccountingAndFinances>;
  findAll(): Promise<AccountingAndFinances[]>;
  update(
    id: string,
    updateData: CreateAccountingAndFinancesDto,
  ): Promise<AccountingAndFinances>;
  private isUpdateDataComplete;
  remove(id: string): Promise<AccountingAndFinances>;
}
