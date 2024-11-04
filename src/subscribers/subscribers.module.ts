import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { SubscribersController } from './subscribers.controller';
import { SubscribersService } from './subscribers.service';
import { Subscriber, SubscriberSchema } from './schemas/subscriber.schema';
import { EmailService } from '../email/email.service';

@Module({
  imports: [
    ConfigModule,
    MongooseModule.forFeature([
      { name: Subscriber.name, schema: SubscriberSchema },
    ]),
  ],
  controllers: [SubscribersController],
  providers: [SubscribersService, EmailService],
})
export class SubscribersModule {}
