import { Document } from "mongoose";
export type ArchitectureAndDesignsDocument = ArchitectureAndDesigns & Document;
export declare class ArchitectureAndDesigns {
  title: string;
  description: string;
  skill: string;
  requirements: string;
}
export declare const ArchitectureAndDesignsSchema: import("mongoose").Schema<
  ArchitectureAndDesigns,
  import("mongoose").Model<
    ArchitectureAndDesigns,
    any,
    any,
    any,
    Document<unknown, any, ArchitectureAndDesigns> &
      ArchitectureAndDesigns & {
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
  ArchitectureAndDesigns,
  Document<unknown, {}, import("mongoose").FlatRecord<ArchitectureAndDesigns>> &
    import("mongoose").FlatRecord<ArchitectureAndDesigns> & {
      _id: import("mongoose").Types.ObjectId;
    } & {
      __v?: number;
    }
>;
