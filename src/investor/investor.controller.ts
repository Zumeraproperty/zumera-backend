import {
  Controller,
  Post,
  Get,
  Body,
  UseGuards,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { InvestorService } from './investor.service';
import { CreateInvestorDto } from './dto/create-investor.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('investor')
export class InvestorController {
  constructor(private readonly investorService: InvestorService) {}

  @Post()
  async create(@Body() createInvestorDto: CreateInvestorDto) {
    return this.investorService.create(createInvestorDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(@Query('page', ParseIntPipe) page: number = 1) {
    return this.investorService.findAll(page);
  }
}
