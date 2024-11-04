import { OperationsService } from './operations.service';
import { CreateOperationsDto } from './dto/create-operations.dto';
export declare class OperationsController {
    private readonly operationsService;
    constructor(operationsService: OperationsService);
    create(createOperationsDto: CreateOperationsDto): Promise<import("./schemas/operations.schema").Operations>;
    findAll(): Promise<import("./schemas/operations.schema").Operations[]>;
    findOne(id: string): Promise<import("./schemas/operations.schema").Operations>;
    update(id: string, updateData: Partial<CreateOperationsDto>): Promise<import("./schemas/operations.schema").Operations>;
    remove(id: string): Promise<import("./schemas/operations.schema").Operations>;
}
