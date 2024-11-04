import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SalesExecutiveDocument = SalesExecutive & Document;

@Schema()
export class SalesExecutive {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ type: String, required: true })
  skill: string;

  @Prop({ type: String, required: true })
  requirements: string;
}

export const SalesExecutiveSchema =
  SchemaFactory.createForClass(SalesExecutive);
