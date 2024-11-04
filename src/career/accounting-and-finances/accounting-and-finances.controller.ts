import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { AccountingAndFinancesService } from './accounting-and-finances.service';
import { CreateAccountingAndFinancesDto } from './dto/create-accounting-and-finances.dto';

@Controller('all-accounting-and-finance')
export class AccountingAndFinancesController {
  constructor(
    private readonly accountingAndFinancesService: AccountingAndFinancesService,
  ) {}

  @Post()
  create(
    @Body() createAccountingAndFinancesDto: CreateAccountingAndFinancesDto,
  ) {
    return this.accountingAndFinancesService.create(
      createAccountingAndFinancesDto,
    );
  }

  @Get()
  findAll() {
    return this.accountingAndFinancesService.findAll();
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateData: CreateAccountingAndFinancesDto,
  ) {
    return this.accountingAndFinancesService.update(id, updateData);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accountingAndFinancesService.remove(id);
  }
}
