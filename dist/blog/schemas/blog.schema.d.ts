import { Document } from "mongoose";
export declare class Blog extends Document {
  title: string;
  blogText1: string;
  blogText2: string;
  blogText3: string;
  blogUrl1: string;
  blogUrl2: string;
  blogUrl3: string;
  cloudinaryUrls: string[];
}
export declare const BlogSchema: import("mongoose").Schema<
  Blog,
  import("mongoose").Model<
    Blog,
    any,
    any,
    any,
    Document<unknown, any, Blog> &
      Blog &
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
  Blog,
  Document<unknown, {}, import("mongoose").FlatRecord<Blog>> &
    import("mongoose").FlatRecord<Blog> &
    Required<{
      _id: unknown;
    }> & {
      __v?: number;
    }
>;
