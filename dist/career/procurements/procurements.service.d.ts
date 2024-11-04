import { Model } from 'mongoose';
import { Procurements, ProcurementsDocument } from './schemas/procurements.schema';
import { CreateProcurementsDto } from './dto/create-procurements.dto';
export declare class ProcurementsService {
    private procurementsModel;
    constructor(procurementsModel: Model<ProcurementsDocument>);
    create(createProcurementsDto: CreateProcurementsDto): Promise<Procurements>;
    findAll(): Promise<Procurements[]>;
    update(id: string, updateData: CreateProcurementsDto): Promise<Procurements>;
    private isUpdateDataComplete;
    remove(id: string): Promise<Procurements>;
}
