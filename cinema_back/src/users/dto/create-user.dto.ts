import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty()
    identificacion: number;

    @IsNotEmpty()
    FK_idtipo: number;

    @IsNotEmpty()
    @IsString()
    nombre: string;

    @IsNotEmpty()
    @IsString()
    apellido: string;

    @IsEmail()
    @IsNotEmpty()
    correo: string;

    @IsString()
    contrasena: string;

    userData: any;
}
