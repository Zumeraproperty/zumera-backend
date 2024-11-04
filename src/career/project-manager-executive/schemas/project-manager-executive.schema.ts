import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProjectManagerExecutiveDocument = ProjectManagerExecutive &
  Document;

@Schema()
export class ProjectManagerExecutive {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ type: String, required: true })
  skill: string;

  @Prop({ type: String, required: true })
  requirements: string;
}

export const ProjectManagerExecutiveSchema = SchemaFactory.createForClass(
  ProjectManagerExecutive,
);
