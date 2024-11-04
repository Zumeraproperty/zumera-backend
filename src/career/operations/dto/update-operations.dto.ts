import { PartialType } from '@nestjs/mapped-types';
import { CreateOperationsDto } from './create-operations.dto';

export class UpdateOperationsDto extends PartialType(CreateOperationsDto) {}
