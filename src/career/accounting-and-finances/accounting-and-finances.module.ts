import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountingAndFinancesController } from './accounting-and-finances.controller';
import { AccountingAndFinancesService } from './accounting-and-finances.service';
import {
  AccountingAndFinances,
  AccountingAndFinancesSchema,
} from './schemas/accounting-and-finances.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: AccountingAndFinances.name,
        schema: AccountingAndFinancesSchema,
      },
    ]),
  ],
  controllers: [AccountingAndFinancesController],
  providers: [AccountingAndFinancesService],
})
export class AccountingAndFinancesModule {}
