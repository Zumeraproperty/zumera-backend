import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { SubscribersService } from './subscribers.service';
import { CreateSubscriberDto } from './dto/create-subscriber.dto';

@Controller('subscriber')
export class SubscribersController {
  constructor(private readonly subscribersService: SubscribersService) {}

  @Post()
  async create(@Body() createSubscriberDto: CreateSubscriberDto) {
    const subscriber =
      await this.subscribersService.create(createSubscriberDto);
    return {
      statusCode: HttpStatus.CREATED,
      message: 'Thank you for subscribing',
      data: subscriber,
    };
  }

  @Get()
  findAll(@Query('page') page: number = 1) {
    return this.subscribersService.findAll(page);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subscribersService.remove(id);
  }
}
