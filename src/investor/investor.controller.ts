import { Controller, Post, Get, Body } from '@nestjs/common';
import { InvestorService } from './investor.service';
import { CreateInvestorDto } from './dto/create-investor.dto';

@Controller('investor')
export class InvestorController {
  constructor(private readonly investorService: InvestorService) {}

  @Post()
  async create(@Body() createInvestorDto: CreateInvestorDto) {
    return this.investorService.create(createInvestorDto);
  }

  @Get()
  async findAll() {
    return this.investorService.findAll();
  }
}
