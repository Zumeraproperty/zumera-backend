import { PartialType } from '@nestjs/mapped-types';
import { CreateHrsDto } from './create-hrs.dto';

export class UpdateHrsDto extends PartialType(CreateHrsDto) {}
