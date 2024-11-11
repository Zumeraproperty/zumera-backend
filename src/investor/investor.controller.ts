import { Controller, Post, Get, Body, UseGuards } from '@nestjs/common';
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
  async findAll() {
    return this.investorService.findAll();
  }
}
