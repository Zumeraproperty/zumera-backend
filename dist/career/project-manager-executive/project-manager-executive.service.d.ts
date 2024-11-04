import { Model } from 'mongoose';
import { ProjectManagerExecutive, ProjectManagerExecutiveDocument } from './schemas/project-manager-executive.schema';
import { CreateProjectManagerExecutiveDto } from './dto/create-project-manager-executive.dto';
export declare class ProjectManagerExecutiveService {
    private projectManagerExecutiveModel;
    constructor(projectManagerExecutiveModel: Model<ProjectManagerExecutiveDocument>);
    create(createProjectManagerExecutiveDto: CreateProjectManagerExecutiveDto): Promise<ProjectManagerExecutive>;
    findAll(): Promise<ProjectManagerExecutive[]>;
    update(id: string, updateData: CreateProjectManagerExecutiveDto): Promise<ProjectManagerExecutive>;
    private isUpdateDataComplete;
    remove(id: string): Promise<ProjectManagerExecutive>;
}
