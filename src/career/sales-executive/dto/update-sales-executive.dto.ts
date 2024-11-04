import { PartialType } from '@nestjs/mapped-types';
import { CreateSalesExecutiveDto } from './create-sales-executive.dto';

export class UpdateSalesExecutiveDto extends PartialType(
  CreateSalesExecutiveDto,
) {}
