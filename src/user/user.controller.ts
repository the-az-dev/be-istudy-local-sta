import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Response } from 'express';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/get/byId/:id')
  async findOne(@Param('id') id: string) {
    return await this.userService.getUserById(+id);
  }

  @Get('/get/photo/byId/:id')
  async findPhotoByOne(@Param('id') id: string, @Res() res: Response) {
    try {
      const extUser: User = await this.userService.getUserById(+id);

      if (extUser != null) {
        res.setHeader('Content-Type', 'image/jpeg'); // Залежить від формату вашого зображення
        res.send(extUser.photo);
      } else throw 'User not found!';
    } catch (error) {
      return error.message;
    }
  }

  @Post('/add')
  async create(@Body() createUserDto: CreateUserDto) {
    try {
      return this.userService.create(createUserDto);
    } catch (error) {
      return error.message;
    }
  }
}
