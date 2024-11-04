import { Document } from "mongoose";
export declare class Applied extends Document {
  jobTitle: string;
  name: string;
  email: string;
  address: string;
  dob: Date;
  experience: string;
  letter: string;
  resume: string;
}
export declare const AppliedSchema: import("mongoose").Schema<
  Applied,
  import("mongoose").Model<
    Applied,
    any,
    any,
    any,
    Document<unknown, any, Applied> &
      Applied &
      Required<{
        _id: unknown;
      }> & {
        __v?: number;
      },
    any
  >,
  {},
  {},
  {},
  {},
  import("mongoose").DefaultSchemaOptions,
  Applied,
  Document<unknown, {}, import("mongoose").FlatRecord<Applied>> &
    import("mongoose").FlatRecord<Applied> &
    Required<{
      _id: unknown;
    }> & {
      __v?: number;
    }
>;
