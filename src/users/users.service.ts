import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { RegisterDto } from 'src/auth/dto/register.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  private canCreateRole(currentUserRole: string, targetRole: string): boolean {
    const roleHierarchy = {
      admin: ['user', 'moderator', 'admin'],
      moderator: ['user', 'admin'],
      user: ['user'],
    };

    return roleHierarchy[currentUserRole]?.includes(targetRole) || false;
  }
  async create(authenticatedUserId: string | null, registerDto: RegisterDto) {
    // For first-time registration
    const usersCount = await this.userModel.countDocuments();
    if (usersCount === 0) {
      const createdUser = new this.userModel({
        ...registerDto,
        role: 'admin',
      });
      await createdUser.save();
      return {
        message: 'First user created as moderator',
        success: true,
        user: createdUser,
      };
    }

    // For regular registration without authentication
    if (!authenticatedUserId) {
      const createdUser = new this.userModel({
        ...registerDto,
        // role: 'user', // Default role for regular registration
      });
      await createdUser.save();
      return {
        message: 'User successfully created',
        success: true,
        user: createdUser,
      };
    }

    const targetRole = registerDto.role || 'user';
    const createdUser = new this.userModel({
      ...registerDto,
      role: targetRole,
    });
    await createdUser.save();

    return {
      message: 'User successfully created',
      success: true,
      user: createdUser,
    };
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.userModel.findOne({ email }).exec();
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
    // Get target user details
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
    const roleHierarchy = {
      user: 1,
      moderator: 2,
      admin: 3,
    };
    return roleHierarchy[currentUserRole] > roleHierarchy[targetUserRole];
  }
}
