import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ProjectManagerExecutiveService } from './project-manager-executive.service';
import { CreateProjectManagerExecutiveDto } from './dto/create-project-manager-executive.dto';

@Controller('project-manager-executive')
export class ProjectManagerExecutiveController {
  constructor(
    private readonly projectManagerExecutiveService: ProjectManagerExecutiveService,
  ) {}

  @Post()
  create(
    @Body() createProjectManagerExecutiveDto: CreateProjectManagerExecutiveDto,
  ) {
    return this.projectManagerExecutiveService.create(
      createProjectManagerExecutiveDto,
    );
  }

  @Get()
  findAll() {
    return this.projectManagerExecutiveService.findAll();
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateData: CreateProjectManagerExecutiveDto,
  ) {
    return this.projectManagerExecutiveService.update(id, updateData);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projectManagerExecutiveService.remove(id);
  }
}
