import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProcurementsController } from './procurements.controller';
import { ProcurementsService } from './procurements.service';
import {
  Procurements,
  ProcurementsSchema,
} from './schemas/procurements.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Procurements.name, schema: ProcurementsSchema },
    ]),
  ],
  controllers: [ProcurementsController],
  providers: [ProcurementsService],
})
export class ProcurementsModule {}
