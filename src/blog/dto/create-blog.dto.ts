import { IsNotEmpty, IsString, IsOptional, IsArray } from 'class-validator';

export class CreateBlogDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  blogText1: string;

  @IsOptional()
  @IsString()
  blogText2?: string;

  @IsOptional()
  @IsString()
  blogText3?: string;

  @IsOptional()
  @IsString()
  blogUrl1?: string;

  @IsOptional()
  @IsString()
  blogUrl2?: string;

  @IsOptional()
  @IsString()
  blogUrl3?: string;

  @IsArray()
  cloudinaryUrls?: string[];
}
