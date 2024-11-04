import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ArchitectureAndDesignsService } from './architecture-and-designs.service';
import { CreateArchitectureAndDesignsDto } from './dto/create-architecture-and-designs.dto';

@Controller('architecture-and-designs')
export class ArchitectureAndDesignsController {
  constructor(
    private readonly architectureAndDesignsService: ArchitectureAndDesignsService,
  ) {}

  @Post()
  create(
    @Body() createArchitectureAndDesignsDto: CreateArchitectureAndDesignsDto,
  ) {
    return this.architectureAndDesignsService.create(
      createArchitectureAndDesignsDto,
    );
  }

  @Get()
  findAll() {
    return this.architectureAndDesignsService.findAll();
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateData: CreateArchitectureAndDesignsDto,
  ) {
    return this.architectureAndDesignsService.update(id, updateData);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.architectureAndDesignsService.remove(id);
  }
}
