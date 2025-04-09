import {
  Body,
  Controller,
  Get,
  HttpStatus,
  NotAcceptableException,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './guards/auth.guard';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';
import { Role } from 'src/user-role/constants/user-role.enum';
import { ApiBearerAuth, ApiBody, ApiResponse } from '@nestjs/swagger';

@Controller('/api/auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}

  @Post('signin')
  @ApiResponse({
    status: HttpStatus.CREATED,
  })
  @ApiBody({
    type: Object,
  })
  async signIn(
    @Body('mail') mail: string,
    @Body('password') password: string,
  ): Promise<any> {
    return await this.authService.signIn(mail, password);
  }

  @Post('register')
  @ApiResponse({
    status: HttpStatus.CREATED,
    type: CreateUserDto,
    example: {
      name: 'User123',
      surname: 'Sur1234',
      mail: 'mail@mail.to',
      login: '123_user_login',
      password: 'hashed_password',
      confirmed: false,
      userRole: '1',
    },
  })
  @ApiBody({
    type: CreateUserDto,
  })
  async register(@Body() userDTO: CreateUserDto): Promise<any> {
    if (userDTO.userRole[0] != Role.Guest)
      return await this.authService.register(userDTO);
    else
      return new NotAcceptableException(
        'Cannot register user with role "Guest"!',
      ).message;
  }

  @Get('profile')
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  async getProfile(@Request() req): Promise<any> {
    return await this.authService.getProfile(req);
  }

  @Post('logout')
  async logout(@Request() req): Promise<any> {
    return await this.authService.logout(req);
  }

  @Get('verify/:mail')
  async verifyUser(@Request() req): Promise<any> {
    const user = await this.userService.getUserByMail(
      req.params.mail as string,
    );
    if (!user)
      return new NotAcceptableException(
        'User not found. Invalid mail address!',
      );
    console.log(user);
    if (user.isVerified)
      return new NotAcceptableException('User was verified earlier!');
    return await this.authService.verify(req.params.mail);
  }
}
