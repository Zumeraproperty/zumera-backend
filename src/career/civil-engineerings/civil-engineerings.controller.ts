import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { CivilEngineeringsService } from './civil-engineerings.service';
import { CreateCivilEngineeringsDto } from './dto/create-civil-engineerings.dto';

@Controller('all-civil-engineering')
export class CivilEngineeringsController {
  constructor(
    private readonly civilEngineeringsService: CivilEngineeringsService,
  ) {}

  @Post()
  create(@Body() createCivilEngineeringsDto: CreateCivilEngineeringsDto) {
    return this.civilEngineeringsService.create(createCivilEngineeringsDto);
  }

  @Get()
  findAll() {
    return this.civilEngineeringsService.findAll();
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateData: CreateCivilEngineeringsDto,
  ) {
    return this.civilEngineeringsService.update(id, updateData);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.civilEngineeringsService.remove(id);
  }
}
