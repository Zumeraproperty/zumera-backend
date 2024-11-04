import { Model } from "mongoose";
import { Subscriber, SubscriberDocument } from "./schemas/subscriber.schema";
import { CreateSubscriberDto } from "./dto/create-subscriber.dto";
import { EmailService } from "../email/email.service";
export declare class SubscribersService {
  private subscriberModel;
  private emailService;
  constructor(
    subscriberModel: Model<SubscriberDocument>,
    emailService: EmailService,
  );
  create(createSubscriberDto: CreateSubscriberDto): Promise<Subscriber>;
  findAll(): Promise<Subscriber[]>;
  findOne(id: string): Promise<Subscriber>;
  remove(id: string): Promise<Subscriber>;
  createOrUpdateFromGoogle(googleUser: any): Promise<
    import("mongoose").Document<unknown, {}, SubscriberDocument> &
      Subscriber &
      import("mongoose").Document<unknown, any, any> &
      Required<{
        _id: unknown;
      }> & {
        __v?: number;
      }
  >;
}
