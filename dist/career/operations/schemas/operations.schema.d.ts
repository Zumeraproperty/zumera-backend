import { Document } from "mongoose";
export type OperationsDocument = Operations & Document;
export declare class Operations {
  title: string;
  description: string;
  skill: string;
  requirements: string;
}
export declare const OperationsSchema: import("mongoose").Schema<
  Operations,
  import("mongoose").Model<
    Operations,
    any,
    any,
    any,
    Document<unknown, any, Operations> &
      Operations & {
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
  Operations,
  Document<unknown, {}, import("mongoose").FlatRecord<Operations>> &
    import("mongoose").FlatRecord<Operations> & {
      _id: import("mongoose").Types.ObjectId;
    } & {
      __v?: number;
    }
>;
