import { UsersService } from "../users/users.service";
import { RegisterDto } from "./dto/register.dto";
export declare class AuthService {
  private usersService;
  constructor(usersService: UsersService);
  login(loginDto: { email: string; password: string }): Promise<{
    message: string;
    userId: import("mongoose").Types.ObjectId;
    role: string;
  }>;
  register(registerDto: RegisterDto): Promise<{
    message: string;
    userId: import("mongoose").Types.ObjectId;
    role: string;
  }>;
}
