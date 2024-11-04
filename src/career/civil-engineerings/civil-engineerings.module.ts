import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CivilEngineeringsController } from './civil-engineerings.controller';
import { CivilEngineeringsService } from './civil-engineerings.service';
import {
  CivilEngineerings,
  CivilEngineeringsSchema,
} from './schemas/civil-engineerings.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: CivilEngineerings.name,
        schema: CivilEngineeringsSchema,
      },
    ]),
  ],
  controllers: [CivilEngineeringsController],
  providers: [CivilEngineeringsService],
})
export class CivilEngineeringsModule {}
