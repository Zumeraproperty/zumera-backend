import { Model } from 'mongoose';
import { Operations, OperationsDocument } from './schemas/operations.schema';
import { CreateOperationsDto } from './dto/create-operations.dto';
export declare class OperationsService {
    private operationsModel;
    constructor(operationsModel: Model<OperationsDocument>);
    create(createOperationsDto: CreateOperationsDto): Promise<Operations>;
    findAll(): Promise<Operations[]>;
    findOne(id: string): Promise<Operations>;
    update(id: string, updateData: Partial<CreateOperationsDto>): Promise<Operations>;
    private isUpdateDataValid;
    remove(id: string): Promise<Operations>;
}
