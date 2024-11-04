import { PartialType } from '@nestjs/mapped-types';
import { CreateCivilEngineeringsDto } from './create-civil-engineerings.dto';

export class UpdateCivilEngineeringsDto extends PartialType(
  CreateCivilEngineeringsDto,
) {}
