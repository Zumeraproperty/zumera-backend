import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectManagerExecutiveController } from './project-manager-executive.controller';
import { ProjectManagerExecutiveService } from './project-manager-executive.service';
import {
  ProjectManagerExecutive,
  ProjectManagerExecutiveSchema,
} from './schemas/project-manager-executive.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: ProjectManagerExecutive.name,
        schema: ProjectManagerExecutiveSchema,
      },
    ]),
  ],
  controllers: [ProjectManagerExecutiveController],
  providers: [ProjectManagerExecutiveService],
})
export class ProjectManagerExecutiveModule {}
