import { PartialType } from '@nestjs/mapped-types';
import { CreateArchitectureAndDesignsDto } from './create-architecture-and-designs.dto';

export class UpdateArchitectureAndDesignsDto extends PartialType(
  CreateArchitectureAndDesignsDto,
) {}
