import { Document } from "mongoose";
export type SalesExecutiveDocument = SalesExecutive & Document;
export declare class SalesExecutive {
  title: string;
  description: string;
  skill: string;
  requirements: string;
}
export declare const SalesExecutiveSchema: import("mongoose").Schema<
  SalesExecutive,
  import("mongoose").Model<
    SalesExecutive,
    any,
    any,
    any,
    Document<unknown, any, SalesExecutive> &
      SalesExecutive & {
        _id: import("mongoose").Types.ObjectId;
      } & {
        __v?: number;
      },
    any
  >,
  {},
  {},
  {},
  {},
  import("mongoose").DefaultSchemaOptions,
  SalesExecutive,
  Document<unknown, {}, import("mongoose").FlatRecord<SalesExecutive>> &
    import("mongoose").FlatRecord<SalesExecutive> & {
      _id: import("mongoose").Types.ObjectId;
    } & {
      __v?: number;
    }
>;
