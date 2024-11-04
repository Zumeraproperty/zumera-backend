import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Applied extends Document {
  @Prop({ required: true })
  jobTitle: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  address: string;

  @Prop({ required: true })
  dob: Date;

  @Prop({ required: true })
  experience: string;

  @Prop({ required: true })
  letter: string;

  @Prop({ required: true })
  resume: string;
}

export const AppliedSchema = SchemaFactory.createForClass(Applied);
