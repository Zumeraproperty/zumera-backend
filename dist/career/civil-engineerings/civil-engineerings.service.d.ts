import { Model } from "mongoose";
import {
  CivilEngineerings,
  CivilEngineeringsDocument,
} from "./schemas/civil-engineerings.schema";
import { CreateCivilEngineeringsDto } from "./dto/create-civil-engineerings.dto";
export declare class CivilEngineeringsService {
  private civilEngineeringsModel;
  constructor(civilEngineeringsModel: Model<CivilEngineeringsDocument>);
  create(
    createCivilEngineeringsDto: CreateCivilEngineeringsDto,
  ): Promise<CivilEngineerings>;
  findAll(): Promise<CivilEngineerings[]>;
  update(
    id: string,
    updateData: CreateCivilEngineeringsDto,
  ): Promise<CivilEngineerings>;
  private isUpdateDataComplete;
  remove(id: string): Promise<CivilEngineerings>;
}
