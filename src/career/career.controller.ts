import {
  Controller,
  Get,
  Delete,
  Put,
  Param,
  Body,
  HttpException,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { CareerService } from './career.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('career')
export class CareerController {
  constructor(private readonly careerService: CareerService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getAllJobs() {
    try {
      return await this.careerService.findAllJobs();
    } catch (error) {
      throw new HttpException(
        'Internal Server Error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Delete(':id')
  async deleteJob(@Param('id') id: string) {
    try {
      await this.careerService.deleteJob(id);
      return { message: 'Deleted successfully' };
    } catch (error) {
      throw new HttpException(
        'Internal Server Error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Put(':id')
  async updateJob(@Param('id') id: string, @Body() updateData: any) {
    try {
      await this.careerService.updateJob(id, updateData[id]);
      return { message: 'Updated successfully' };
    } catch (error) {
      throw new HttpException(
        'Internal Server Error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get(':id')
  async getJob(@Param('id') id: string) {
    try {
      return await this.careerService.findOneJob(id);
    } catch (error) {
      throw new HttpException(
        'Internal Server Error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
