import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AccountingAndFinancesDocument = AccountingAndFinances & Document;

@Schema()
export class AccountingAndFinances {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ type: String, required: true })
  skill: string;

  @Prop({ type: String, required: true })
  requirements: string;
}

export const AccountingAndFinancesSchema = SchemaFactory.createForClass(
  AccountingAndFinances,
);
