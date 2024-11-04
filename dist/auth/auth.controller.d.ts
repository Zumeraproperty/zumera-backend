import { AuthService } from "./auth.service";
import { LoginDto } from "./dto/login.dto";
import { RegisterDto } from "./dto/register.dto";
export declare class AuthController {
  private authService;
  constructor(authService: AuthService);
  login(loginDto: LoginDto): Promise<{
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
