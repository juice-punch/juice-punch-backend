import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
} from '@nestjs/common';

import { CreateUserDto } from './../../@core/dtos/user/create-user.dto';
import { User } from './../../@core/interfaces/user.interface';
import { UsersService } from './user.service';

@Controller('user')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  async create(@Body() userPayload: CreateUserDto): Promise<User> {
    return this.usersService.create(userPayload);
  }
}
