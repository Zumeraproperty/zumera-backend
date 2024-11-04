import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { GoogleStrategy } from './strategy/google.strategy';

@Module({
  imports: [PassportModule],
  providers: [GoogleStrategy],
})
export class AuthModule {}
