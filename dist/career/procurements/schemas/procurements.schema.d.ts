import { Document } from 'mongoose';
export type ProcurementsDocument = Procurements & Document;
export declare class Procurements {
    title: string;
    description: string;
    skill: string;
    requirements: string;
}
export declare const ProcurementsSchema: import("mongoose").Schema<Procurements, import("mongoose").Model<Procurements, any, any, any, Document<unknown, any, Procurements> & Procurements & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v?: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Procurements, Document<unknown, {}, import("mongoose").FlatRecord<Procurements>> & import("mongoose").FlatRecord<Procurements> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v?: number;
}>;
