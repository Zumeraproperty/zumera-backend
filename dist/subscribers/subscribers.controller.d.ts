import { SubscribersService } from "./subscribers.service";
import { CreateSubscriberDto } from "./dto/create-subscriber.dto";
export declare class SubscribersController {
  private readonly subscribersService;
  constructor(subscribersService: SubscribersService);
  create(
    createSubscriberDto: CreateSubscriberDto,
  ): Promise<import("./schemas/subscriber.schema").Subscriber>;
  findAll(): Promise<import("./schemas/subscriber.schema").Subscriber[]>;
  remove(id: string): Promise<import("./schemas/subscriber.schema").Subscriber>;
}
