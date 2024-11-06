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

  async findByEmail(email: string): Promise<User | null> {
    return this.userModel.findOne({ email }).exec();
  }

  async create(createUserDto: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role?: string;
  }): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
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
  ): Promise<User> {
    const targetUser = await this.findOne(targetUserId);

    if (!this.canModifyUser(currentUserRole, targetUser.role)) {
      throw new ForbiddenException(
        'You do not have permission to modify this user',
      );
    }

    return this.userModel
      .findByIdAndUpdate(targetUserId, { $set: updateUserDto }, { new: true })
      .exec();
  }

  async delete(currentUserRole: string, targetUserId: string): Promise<User> {
    const targetUser = await this.findOne(targetUserId);

    if (!this.canModifyUser(currentUserRole, targetUser.role)) {
      throw new ForbiddenException(
        'You do not have permission to delete this user',
      );
    }

    return this.userModel.findByIdAndDelete(targetUserId).exec();
  }

  private canModifyUser(
    currentUserRole: string,
    targetUserRole: string,
  ): boolean {
    return roleHierarchy[currentUserRole] > roleHierarchy[targetUserRole];
  }
}
