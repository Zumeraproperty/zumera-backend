import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ArchitectureAndDesignsController } from './architecture-and-designs.controller';
import { ArchitectureAndDesignsService } from './architecture-and-designs.service';
import {
  ArchitectureAndDesigns,
  ArchitectureAndDesignsSchema,
} from './schemas/architecture-and-designs.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: ArchitectureAndDesigns.name,
        schema: ArchitectureAndDesignsSchema,
      },
    ]),
  ],
  controllers: [ArchitectureAndDesignsController],
  providers: [ArchitectureAndDesignsService],
})
export class ArchitectureAndDesignsModule {}
