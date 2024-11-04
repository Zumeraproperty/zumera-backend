import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JobApplicationController } from './job-application.controller';
import { JobApplicationService } from './job-application.service';
import { Applied, AppliedSchema } from './schemas/applied.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Applied.name, schema: AppliedSchema }]),
  ],
  controllers: [JobApplicationController],
  providers: [JobApplicationService],
})
export class JobApplicationModule {}
