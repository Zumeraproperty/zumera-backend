import {
  Injectable,
  ConflictException,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  private generateToken(user: any) {
    const payload = {
      sub: user.user?._id || user._id,
      email: user.user?.email || user.email,
      role: user.user?.role || user.role,
      firstName: user.user?.firstName || user.firstName,
      lastName: user.user?.lastName || user.lastName,
      iat: Math.floor(Date.now() / 1000),
    };
    return this.jwtService.sign(payload);
  }

  async login(loginDto: { email: string; password: string }) {
    const user = await this.usersService.findByEmail(loginDto.email);
    if (user && (await bcrypt.compare(loginDto.password, user.password))) {
      return {
        message: 'Login successful',
        userId: user._id,
        role: user.role,
        access_token: this.generateToken({ user }),
      };
    }
    throw new UnauthorizedException('Invalid credentials');
  }

  async register(registerDto: RegisterDto, loggedInUser: any) {
    // Use the userId directly from JWT payload
    const authenticatedUserId = loggedInUser;

    const authenticatedUserRole =
      await this.usersService.findOne(authenticatedUserId);

    const existingUser = await this.usersService.findByEmail(registerDto.email);
    if (existingUser) {
      throw new ConflictException('Email already exists');
    }

    const roleHierarchy = {
      admin: ['user', 'moderator', 'admin'],
      moderator: ['user', 'moderator'],
      user: ['user'],
    };

    const targetRole = registerDto.role || 'user';
    const canCreateRole =
      roleHierarchy[authenticatedUserRole.role]?.includes(targetRole);

    if (!canCreateRole) {
      return {
        message: `${authenticatedUserRole.role} cannot create users with ${targetRole} role`,
        success: false,
      };
    }

    const hashedPassword = await bcrypt.hash(registerDto.password, 10);
    const newUser = await this.usersService.create(loggedInUser.role, {
      firstName: registerDto.firstName,
      lastName: registerDto.lastName,
      email: registerDto.email,
      password: hashedPassword,
      role: targetRole,
    });

    return {
      access_token: this.generateToken(newUser.user),
      message: newUser.message,
      success: newUser.success,
      role: newUser.user?.role,
    };
  }
}
