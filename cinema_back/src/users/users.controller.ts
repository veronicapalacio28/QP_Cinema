import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, UnauthorizedException, HttpStatus, ConflictException } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginDto } from './dto/login.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('login')
  async login(@Body() body: LoginDto) {
    console.log(body)
    const user = await this.usersService.validateUser(body.correo, body.contrasena);
    if (!user) {
      throw new UnauthorizedException('El correo o contraseña no coinciden');
    }
    return user;
  }

  @Post('register')
  async create(@Body() createUserDto: CreateUserDto) {
    try {
      const result = await this.usersService.create(createUserDto.userData);
      return result;
    } catch (error) {
      console.log('error', error);
      if (error instanceof ConflictException) {
        return { message: error.message };
      }
      throw error;
    }
  }
}
