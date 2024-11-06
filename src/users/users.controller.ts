import { Controller, Get, Post, Body, Param, Patch } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  create(
    @Body()
    createUserDto: {
      firstName: string;
      lastName: string;
      email: string;
      password: string;
    },
  ) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  async updateUser(
    @Param('id') id: string,
    @Body()
    updateUserDto: {
      firstName?: string;
      lastName?: string;
      email?: string;
      role?: string;
    },
  ) {
    return this.usersService.update(id, updateUserDto);
  }
}
