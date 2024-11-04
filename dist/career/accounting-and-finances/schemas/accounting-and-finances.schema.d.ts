import { Document } from 'mongoose';
export type AccountingAndFinancesDocument = AccountingAndFinances & Document;
export declare class AccountingAndFinances {
    title: string;
    description: string;
    skill: string;
    requirements: string;
}
export declare const AccountingAndFinancesSchema: import("mongoose").Schema<AccountingAndFinances, import("mongoose").Model<AccountingAndFinances, any, any, any, Document<unknown, any, AccountingAndFinances> & AccountingAndFinances & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v?: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, AccountingAndFinances, Document<unknown, {}, import("mongoose").FlatRecord<AccountingAndFinances>> & import("mongoose").FlatRecord<AccountingAndFinances> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v?: number;
}>;
