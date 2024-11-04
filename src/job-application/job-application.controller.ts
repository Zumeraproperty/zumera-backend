import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Body,
  UseInterceptors,
  UploadedFile,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { JobApplicationService } from './job-application.service';
import { CreateApplicationDto } from './dto/create-application.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('job-applications')
@Controller('application')
export class JobApplicationController {
  constructor(private readonly jobApplicationService: JobApplicationService) {}

  @Post()
  @UseInterceptors(FileInterceptor('pdfFile'))
  @ApiOperation({ summary: 'Submit a job application' })
  async create(
    @UploadedFile() file: Express.Multer.File,
    @Body() createApplicationDto: CreateApplicationDto,
  ) {
    if (!file) {
      throw new HttpException('No file uploaded', HttpStatus.BAD_REQUEST);
    }
    if (file.mimetype !== 'application/pdf') {
      throw new HttpException(
        'Invalid file format. Only PDF files are allowed',
        HttpStatus.BAD_REQUEST,
      );
    }
    return this.jobApplicationService.create(file, createApplicationDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all job applications' })
  async findAll() {
    return this.jobApplicationService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a single job application' })
  async findOne(@Param('id') id: string) {
    return this.jobApplicationService.findOne(id);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a job application' })
  async remove(@Param('id') id: string) {
    return this.jobApplicationService.remove(id);
  }
}
