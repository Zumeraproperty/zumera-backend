import { Model } from "mongoose";
import {
  SalesExecutive,
  SalesExecutiveDocument,
} from "./schemas/sales-executive.schema";
import { CreateSalesExecutiveDto } from "./dto/create-sales-executive.dto";
export declare class SalesExecutiveService {
  private salesExecutiveModel;
  constructor(salesExecutiveModel: Model<SalesExecutiveDocument>);
  create(
    createSalesExecutiveDto: CreateSalesExecutiveDto,
  ): Promise<SalesExecutive>;
  findAll(): Promise<SalesExecutive[]>;
  update(
    id: string,
    updateData: CreateSalesExecutiveDto,
  ): Promise<SalesExecutive>;
  private isUpdateDataComplete;
  remove(id: string): Promise<SalesExecutive>;
}
