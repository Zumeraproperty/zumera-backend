import { Model } from 'mongoose';
import { Hrs, HrsDocument } from './schemas/hrs.schema';
import { CreateHrsDto } from './dto/create-hrs.dto';
export declare class HrsService {
    private hrsModel;
    constructor(hrsModel: Model<HrsDocument>);
    create(createHrsDto: CreateHrsDto): Promise<Hrs>;
    findAll(): Promise<Hrs[]>;
    update(id: string, updateData: CreateHrsDto): Promise<Hrs>;
    private isUpdateDataComplete;
    remove(id: string): Promise<Hrs>;
}
