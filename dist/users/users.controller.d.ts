import { UsersService } from "./users.service";
export declare class UsersController {
  private usersService;
  constructor(usersService: UsersService);
  create(createUserDto: {
    name: string;
    email: string;
    password: string;
  }): Promise<import("./schemas/user.schema").User>;
  findOne(id: string): Promise<import("./schemas/user.schema").User>;
}
