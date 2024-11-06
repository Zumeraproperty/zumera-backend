import { Injectable, ForbiddenException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';

enum Role {
  USER = 'user',
  ADMIN = 'admin',
  MODERATOR = 'moderator',
}

const roleHierarchy = {
  [Role.USER]: 1,
  [Role.ADMIN]: 2,
  [Role.MODERATOR]: 3,
};

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  private canCreateRole(currentUserRole: string, targetRole: string): boolean {
    const roleHierarchy = {
      user: ['user'],
      admin: ['user', 'admin'],
      moderator: ['user', 'admin', 'moderator'],
    };

    return roleHierarchy[currentUserRole]?.includes(targetRole) || false;
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.userModel.findOne({ email }).exec();
  }

  async create(
    currentUserRole: string,
    registerDto: {
      firstName: string;
      lastName: string;
      email: string;
      password: string;
      role?: string;
    },
  ): Promise<any> {
    const targetRole = registerDto.role || 'user';

    if (!this.canCreateRole(currentUserRole, targetRole)) {
      return {
        message: `${currentUserRole} role cannot create ${targetRole} role`,
        success: false,
      };
    }

    const createdUser = new this.userModel(registerDto);
    await createdUser.save();

    return {
      message: 'User successfully created',
      success: true,
      user: createdUser,
    };
  }

  async findOne(id: string): Promise<User> {
    return this.userModel.findById(id).exec();
  }

  async findByUsername(username: string): Promise<User> {
    return this.userModel.findOne({ username }).exec();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async update(
    currentUserRole: string,
    targetUserId: string,
    updateUserDto: any,
  ): Promise<any> {
    const targetUser = await this.findOne(targetUserId);

    if (!this.canModifyUser(currentUserRole, targetUser.role)) {
      return {
        message: 'You do not have permission to modify this user',
        success: false,
      };
    }

    const updatedUser = await this.userModel
      .findByIdAndUpdate(targetUserId, { $set: updateUserDto }, { new: true })
      .exec();

    return {
      message: 'User successfully updated',
      success: true,
      user: updatedUser,
    };
  }

  async delete(currentUserRole: string, targetUserId: string): Promise<any> {
    const targetUser = await this.findOne(targetUserId);

    if (!this.canModifyUser(currentUserRole, targetUser.role)) {
      return {
        message: 'You do not have permission to delete this user',
        success: false,
      };
    }

    await this.userModel.findByIdAndDelete(targetUserId).exec();
    return {
      message: 'User successfully deleted',
      success: true,
    };
  }

  private canModifyUser(
    currentUserRole: string,
    targetUserRole: string,
  ): boolean {
    return roleHierarchy[currentUserRole] > roleHierarchy[targetUserRole];
  }
}
