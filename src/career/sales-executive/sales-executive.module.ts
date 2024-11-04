import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SalesExecutiveController } from './sales-executive.controller';
import { SalesExecutiveService } from './sales-executive.service';
import {
  SalesExecutive,
  SalesExecutiveSchema,
} from './schemas/sales-executive.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: SalesExecutive.name, schema: SalesExecutiveSchema },
    ]),
  ],
  controllers: [SalesExecutiveController],
  providers: [SalesExecutiveService],
})
export class SalesExecutiveModule {}
