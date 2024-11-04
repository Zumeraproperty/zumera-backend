import { PartialType } from '@nestjs/mapped-types';
import { CreateAccountingAndFinancesDto } from './create-accounting-and-finances.dto';

export class UpdateAccountingAndFinancesDto extends PartialType(
  CreateAccountingAndFinancesDto,
) {}
