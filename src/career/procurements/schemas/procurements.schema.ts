import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProcurementsDocument = Procurements & Document;

@Schema()
export class Procurements {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ type: String, required: true })
  skill: string;

  @Prop({ type: String, required: true })
  requirements: string;
}

export const ProcurementsSchema = SchemaFactory.createForClass(Procurements);
