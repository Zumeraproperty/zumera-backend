import { IsString, IsNotEmpty, IsEmail, IsDateString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateApplicationDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  jobTitle: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  address: string;

  @ApiProperty()
  @IsDateString()
  @IsNotEmpty()
  dob: Date;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  experience: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  letter: string;
}
