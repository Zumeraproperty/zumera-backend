import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Blog extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  blogText1: string;

  @Prop()
  blogText2: string;

  @Prop()
  blogText3: string;

  @Prop()
  blogUrl1: string;

  @Prop()
  blogUrl2: string;

  @Prop()
  blogUrl3: string;

  @Prop([String])
  cloudinaryUrls: string[];
}

export const BlogSchema = SchemaFactory.createForClass(Blog);
