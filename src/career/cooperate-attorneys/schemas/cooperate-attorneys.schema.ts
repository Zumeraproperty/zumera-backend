import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CooperateAttorneysDocument = CooperateAttorneys & Document;

@Schema()
export class CooperateAttorneys {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ type: String, required: true })
  skill: string;

  @Prop({ type: String, required: true })
  requirements: string;
}

export const CooperateAttorneysSchema =
  SchemaFactory.createForClass(CooperateAttorneys);
