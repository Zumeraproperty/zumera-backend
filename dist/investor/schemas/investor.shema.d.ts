import { Document } from 'mongoose';
export declare class Investor extends Document {
    name: string;
    email: string;
    mobile: string;
    category: string;
    createdAt: Date;
}
export declare const InvestorSchema: import("mongoose").Schema<Investor, import("mongoose").Model<Investor, any, any, any, Document<unknown, any, Investor> & Investor & Required<{
    _id: unknown;
}> & {
    __v?: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Investor, Document<unknown, {}, import("mongoose").FlatRecord<Investor>> & import("mongoose").FlatRecord<Investor> & Required<{
    _id: unknown;
}> & {
    __v?: number;
}>;
