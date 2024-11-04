import { Document } from 'mongoose';
export type CivilEngineeringsDocument = CivilEngineerings & Document;
export declare class CivilEngineerings {
    title: string;
    description: string;
    skill: string;
    requirements: string;
}
export declare const CivilEngineeringsSchema: import("mongoose").Schema<CivilEngineerings, import("mongoose").Model<CivilEngineerings, any, any, any, Document<unknown, any, CivilEngineerings> & CivilEngineerings & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v?: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, CivilEngineerings, Document<unknown, {}, import("mongoose").FlatRecord<CivilEngineerings>> & import("mongoose").FlatRecord<CivilEngineerings> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v?: number;
}>;
