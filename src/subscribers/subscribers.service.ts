import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Subscriber, SubscriberDocument } from './schemas/subscriber.schema';
import { CreateSubscriberDto } from './dto/create-subscriber.dto';
import { EmailService } from '../email/email.service';

@Injectable()
export class SubscribersService {
  constructor(
    @InjectModel(Subscriber.name)
    private subscriberModel: Model<SubscriberDocument>,
    private emailService: EmailService,
  ) {}

  async create(createSubscriberDto: CreateSubscriberDto): Promise<Subscriber> {
    const createdSubscriber = new this.subscriberModel(createSubscriberDto);
    await this.emailService.sendSubscriberEmail(
      createSubscriberDto.name,
      createSubscriberDto.email,
    );
    return createdSubscriber.save();
  }

  async findAll(): Promise<Subscriber[]> {
    return this.subscriberModel.find().sort({ createdAt: -1 }).exec();
  }

  async findOne(id: string): Promise<Subscriber> {
    return this.subscriberModel.findById(id).exec();
  }

  async remove(id: string): Promise<Subscriber> {
    return this.subscriberModel.findByIdAndDelete(id).exec();
  }

  async createOrUpdateFromGoogle(googleUser: any) {
    const { email, firstName, lastName } = googleUser;
    let subscriber = await this.subscriberModel.findOne({ email });

    if (!subscriber) {
      subscriber = new this.subscriberModel({
        email,
        name: `${firstName} ${lastName}`,
      });
    } else {
      subscriber.name = `${firstName} ${lastName}`;
    }

    await subscriber.save();
    return subscriber;
  }
}
