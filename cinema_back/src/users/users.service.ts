import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(UserEntity) private userRepository: Repository<UserEntity>,
  ) { }

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.userRepository.findOne({ where : {correo: email}});
    if (user && await bcrypt.compareSync(pass, user.contrasena)) {
      return {
        'rol': user.rol,
        'nombre': user.nombre,
        'correo': user.correo,
        'apellido': user.apellido,
        'identificacion': user.identificacion
      };
    }
    return null;
  }

  async create(createUserDto: CreateUserDto): Promise<{ message: string }> {
    const existingUser = await this.userRepository.findOne({
      where: { correo: createUserDto.correo },
    });

    if (existingUser) {
      throw new ConflictException('Ya existe un usuario con ese correo.');
    }

    const newUser = new UserEntity();
    newUser.identificacion = +createUserDto.identificacion;
    newUser.FK_idtipo = +createUserDto.FK_idtipo;
    newUser.rol = '1';
    newUser.nombre = createUserDto.nombre;
    newUser.apellido = createUserDto.apellido;
    newUser.correo = createUserDto.correo;
    newUser.contrasena = await this.hashPassword(createUserDto.contrasena);

    await this.userRepository.save(newUser);
    return { message: 'Usuario creado.' };
  }

  private async hashPassword(password: string): Promise<string> {
    return bcrypt.hashSync(password, 10);
  }
}
