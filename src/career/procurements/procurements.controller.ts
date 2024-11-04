import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ProcurementsService } from './procurements.service';
import { CreateProcurementsDto } from './dto/create-procurements.dto';

@Controller('procurements')
export class ProcurementsController {
  constructor(private readonly procurementsService: ProcurementsService) {}

  @Post()
  create(@Body() createProcurementsDto: CreateProcurementsDto) {
    return this.procurementsService.create(createProcurementsDto);
  }

  @Get()
  findAll() {
    return this.procurementsService.findAll();
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateData: CreateProcurementsDto) {
    return this.procurementsService.update(id, updateData);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.procurementsService.remove(id);
  }
}
