import { Document } from 'mongoose';
export type ProjectManagerExecutiveDocument = ProjectManagerExecutive & Document;
export declare class ProjectManagerExecutive {
    title: string;
    description: string;
    skill: string;
    requirements: string;
}
export declare const ProjectManagerExecutiveSchema: import("mongoose").Schema<ProjectManagerExecutive, import("mongoose").Model<ProjectManagerExecutive, any, any, any, Document<unknown, any, ProjectManagerExecutive> & ProjectManagerExecutive & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v?: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ProjectManagerExecutive, Document<unknown, {}, import("mongoose").FlatRecord<ProjectManagerExecutive>> & import("mongoose").FlatRecord<ProjectManagerExecutive> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v?: number;
}>;
