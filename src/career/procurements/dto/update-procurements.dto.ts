import { PartialType } from '@nestjs/mapped-types';
import { CreateProcurementsDto } from './create-procurements.dto';

export class UpdateProcurementsDto extends PartialType(CreateProcurementsDto) {}
