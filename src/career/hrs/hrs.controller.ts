import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { HrsService } from './hrs.service';
import { CreateHrsDto } from './dto/create-hrs.dto';

@Controller('hrs')
export class HrsController {
  constructor(private readonly hrsService: HrsService) {}

  @Post()
  create(@Body() createHrsDto: CreateHrsDto) {
    return this.hrsService.create(createHrsDto);
  }

  @Get()
  findAll() {
    return this.hrsService.findAll();
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateData: CreateHrsDto) {
    return this.hrsService.update(id, updateData);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hrsService.remove(id);
  }
}
