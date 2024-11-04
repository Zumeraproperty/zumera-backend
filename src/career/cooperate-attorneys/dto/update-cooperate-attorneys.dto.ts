import { PartialType } from '@nestjs/mapped-types';
import { CreateCooperateAttorneysDto } from './create-cooperate-attorneys.dto';

export class UpdateCooperateAttorneysDto extends PartialType(
  CreateCooperateAttorneysDto,
) {}
