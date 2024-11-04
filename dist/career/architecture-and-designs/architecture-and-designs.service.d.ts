import { Model } from 'mongoose';
import { ArchitectureAndDesigns, ArchitectureAndDesignsDocument } from './schemas/architecture-and-designs.schema';
import { CreateArchitectureAndDesignsDto } from './dto/create-architecture-and-designs.dto';
export declare class ArchitectureAndDesignsService {
    private architectureAndDesignsModel;
    constructor(architectureAndDesignsModel: Model<ArchitectureAndDesignsDocument>);
    create(createArchitectureAndDesignsDto: CreateArchitectureAndDesignsDto): Promise<ArchitectureAndDesigns>;
    findAll(): Promise<ArchitectureAndDesigns[]>;
    update(id: string, updateData: CreateArchitectureAndDesignsDto): Promise<ArchitectureAndDesigns>;
    private isUpdateDataComplete;
    remove(id: string): Promise<ArchitectureAndDesigns>;
}
