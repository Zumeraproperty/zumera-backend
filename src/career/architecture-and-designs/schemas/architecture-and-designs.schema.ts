import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ArchitectureAndDesignsDocument = ArchitectureAndDesigns & Document;

@Schema()
export class ArchitectureAndDesigns {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ type: String, required: true })
  skill: string;

  @Prop({ type: String, required: true })
  requirements: string;
}

export const ArchitectureAndDesignsSchema = SchemaFactory.createForClass(
  ArchitectureAndDesigns,
);
