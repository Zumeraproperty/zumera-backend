import { Document } from "mongoose";
export type CooperateAttorneysDocument = CooperateAttorneys & Document;
export declare class CooperateAttorneys {
  title: string;
  description: string;
  skill: string;
  requirements: string;
}
export declare const CooperateAttorneysSchema: import("mongoose").Schema<
  CooperateAttorneys,
  import("mongoose").Model<
    CooperateAttorneys,
    any,
    any,
    any,
    Document<unknown, any, CooperateAttorneys> &
      CooperateAttorneys & {
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
  CooperateAttorneys,
  Document<unknown, {}, import("mongoose").FlatRecord<CooperateAttorneys>> &
    import("mongoose").FlatRecord<CooperateAttorneys> & {
      _id: import("mongoose").Types.ObjectId;
    } & {
      __v?: number;
    }
>;
