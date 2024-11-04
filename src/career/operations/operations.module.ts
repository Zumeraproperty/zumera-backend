import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OperationsController } from './operations.controller';
import { OperationsService } from './operations.service';
import { Operations, OperationsSchema } from './schemas/operations.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Operations.name, schema: OperationsSchema },
    ]),
  ],
  controllers: [OperationsController],
  providers: [OperationsService],
})
export class OperationsModule {}
