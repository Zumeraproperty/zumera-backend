import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HrsController } from './hrs.controller';
import { HrsService } from './hrs.service';
import { Hrs, HrsSchema } from './schemas/hrs.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Hrs.name, schema: HrsSchema }])],
  controllers: [HrsController],
  providers: [HrsService],
})
export class HrsModule {}
