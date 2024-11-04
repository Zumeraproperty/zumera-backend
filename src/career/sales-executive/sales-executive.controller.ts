import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { SalesExecutiveService } from './sales-executive.service';
import { CreateSalesExecutiveDto } from './dto/create-sales-executive.dto';

@Controller('sales-executive')
export class SalesExecutiveController {
  constructor(private readonly salesExecutiveService: SalesExecutiveService) {}

  @Post()
  create(@Body() createSalesExecutiveDto: CreateSalesExecutiveDto) {
    return this.salesExecutiveService.create(createSalesExecutiveDto);
  }

  @Get()
  findAll() {
    return this.salesExecutiveService.findAll();
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateData: CreateSalesExecutiveDto) {
    return this.salesExecutiveService.update(id, updateData);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.salesExecutiveService.remove(id);
  }
}
