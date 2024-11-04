import { Document } from "mongoose";
export type HrsDocument = Hrs & Document;
export declare class Hrs {
  title: string;
  description: string;
  skill: string;
  requirements: string;
}
export declare const HrsSchema: import("mongoose").Schema<
  Hrs,
  import("mongoose").Model<
    Hrs,
    any,
    any,
    any,
    Document<unknown, any, Hrs> &
      Hrs & {
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
  Hrs,
  Document<unknown, {}, import("mongoose").FlatRecord<Hrs>> &
    import("mongoose").FlatRecord<Hrs> & {
      _id: import("mongoose").Types.ObjectId;
    } & {
      __v?: number;
    }
>;
