import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { CooperateAttorneysService } from './cooperate-attorneys.service';
import { CreateCooperateAttorneysDto } from './dto/create-cooperate-attorneys.dto';

@Controller('cooperate-attorneys')
export class CooperateAttorneysController {
  constructor(
    private readonly cooperateAttorneysService: CooperateAttorneysService,
  ) {}

  @Post()
  create(@Body() createCooperateAttorneysDto: CreateCooperateAttorneysDto) {
    return this.cooperateAttorneysService.create(createCooperateAttorneysDto);
  }

  @Get()
  findAll() {
    return this.cooperateAttorneysService.findAll();
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateData: CreateCooperateAttorneysDto,
  ) {
    return this.cooperateAttorneysService.update(id, updateData);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cooperateAttorneysService.remove(id);
  }
}
