import { IsString } from 'class-validator';

export class CreateAccountingAndFinancesDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  skill: string;

  @IsString()
  requirements: string;
}
