import { IsString } from 'class-validator';

export class CreateArchitectureAndDesignsDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  skill: string;

  @IsString()
  requirements: string;
}
