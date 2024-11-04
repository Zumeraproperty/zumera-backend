import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { InvestorController } from './investor.controller';
import { InvestorService } from './investor.service';
import { Investor, InvestorSchema } from './schemas/investor.shema';
import { EmailModule } from '../email/email.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Investor.name, schema: InvestorSchema },
    ]),
    EmailModule,
  ],
  controllers: [InvestorController],
  providers: [InvestorService],
})
export class InvestorModule {}
