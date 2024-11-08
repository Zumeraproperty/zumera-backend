import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Subscriber, SubscriberDocument } from './schemas/subscriber.schema';
import { CreateSubscriberDto } from './dto/create-subscriber.dto';
import { EmailService } from '../email/email.service';

@Injectable()
export class SubscribersService {
  private ITEMS_PER_PAGE = 15;

  constructor(
    @InjectModel(Subscriber.name)
    private subscriberModel: Model<SubscriberDocument>,
    private emailService: EmailService,
  ) {}

  async create(createSubscriberDto: CreateSubscriberDto): Promise<any> {
    // Check if a subscriber with the same email already exists
    const existingSubscriber = await this.subscriberModel.findOne({
      email: createSubscriberDto.email,
    });

    if (existingSubscriber) {
      return {
        success: false,
        message: 'This email is already subscribed',
      };
    }

    // Create a new subscriber if no existing one is found
    const createdSubscriber = new this.subscriberModel(createSubscriberDto);

    // Send a welcome email to the new subscriber
    await this.emailService.sendSubscriberEmail(
      createSubscriberDto.name,
      createSubscriberDto.email,
    );

    // Save and return the created subscriber
    await createdSubscriber.save();

    return {
      success: true,
      message: 'Subscriber created successfully',
      subscriber: createdSubscriber,
    };
  }

  async findAll(
    page: number = 1,
  ): Promise<{ data: Subscriber[]; total: number; pages: number }> {
    const skip = (page - 1) * this.ITEMS_PER_PAGE;

    const [subscribers, total] = await Promise.all([
      this.subscriberModel
        .find()
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(this.ITEMS_PER_PAGE)
        .exec(),
      this.subscriberModel.countDocuments(),
    ]);

    return {
      data: subscribers,
      total,
      pages: Math.ceil(total / this.ITEMS_PER_PAGE),
    };
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
