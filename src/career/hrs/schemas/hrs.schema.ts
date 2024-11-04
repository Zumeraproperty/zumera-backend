import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type HrsDocument = Hrs & Document;

@Schema()
export class Hrs {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ type: String, required: true })
  skill: string;

  @Prop({ type: String, required: true })
  requirements: string;
}

export const HrsSchema = SchemaFactory.createForClass(Hrs);
