import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CooperateAttorneysController } from './cooperate-attorneys.controller';
import { CooperateAttorneysService } from './cooperate-attorneys.service';
import {
  CooperateAttorneys,
  CooperateAttorneysSchema,
} from './schemas/cooperate-attorneys.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: CooperateAttorneys.name,
        schema: CooperateAttorneysSchema,
      },
    ]),
  ],
  controllers: [CooperateAttorneysController],
  providers: [CooperateAttorneysService],
})
export class CooperateAttorneysModule {}
