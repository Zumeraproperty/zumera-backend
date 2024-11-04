import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty({ required: false, default: 'user' })
  role: string;
}
