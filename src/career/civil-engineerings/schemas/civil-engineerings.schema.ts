import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CivilEngineeringsDocument = CivilEngineerings & Document;

@Schema()
export class CivilEngineerings {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ type: String, required: true })
  skill: string;

  @Prop({ type: String, required: true })
  requirements: string;
}

export const CivilEngineeringsSchema =
  SchemaFactory.createForClass(CivilEngineerings);
