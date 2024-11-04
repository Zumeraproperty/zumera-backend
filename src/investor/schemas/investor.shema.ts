import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Investor extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  mobile: string;

  @Prop({ required: true })
  category: string;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const InvestorSchema = SchemaFactory.createForClass(Investor);
