import { PartialType } from '@nestjs/mapped-types';
import { CreateProjectManagerExecutiveDto } from './create-project-manager-executive.dto';

export class UpdateProjectManagerExecutiveDto extends PartialType(
  CreateProjectManagerExecutiveDto,
) {}
