import { Model } from "mongoose";
import {
  CooperateAttorneys,
  CooperateAttorneysDocument,
} from "./schemas/cooperate-attorneys.schema";
import { CreateCooperateAttorneysDto } from "./dto/create-cooperate-attorneys.dto";
export declare class CooperateAttorneysService {
  private cooperateAttorneysModel;
  constructor(cooperateAttorneysModel: Model<CooperateAttorneysDocument>);
  create(
    createCooperateAttorneysDto: CreateCooperateAttorneysDto,
  ): Promise<CooperateAttorneys>;
  findAll(): Promise<CooperateAttorneys[]>;
  update(
    id: string,
    updateData: CreateCooperateAttorneysDto,
  ): Promise<CooperateAttorneys>;
  private isUpdateDataComplete;
  remove(id: string): Promise<CooperateAttorneys>;
}
