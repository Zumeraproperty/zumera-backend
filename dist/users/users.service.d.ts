import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    findByEmail(email: string): Promise<User | null>;
    create(createUserDto: {
        name: string;
        email: string;
        password: string;
        role?: string;
    }): Promise<User>;
    findOne(id: string): Promise<User>;
    findByUsername(username: string): Promise<User>;
}
