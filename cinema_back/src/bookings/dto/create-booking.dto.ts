import { IsNotEmpty } from 'class-validator';
export class CreateBookingDto {
  @IsNotEmpty()
  id_reserva: number;
  @IsNotEmpty()
  FK_identificacion: number;
  @IsNotEmpty()
  FK_idpelicula: number;
  @IsNotEmpty()
  FK_idsala: number;
  @IsNotEmpty()
  id_silla: number;
  @IsNotEmpty()
  horario: string;
  @IsNotEmpty()
  valor_total: number;
  @IsNotEmpty()
  estado: number;
}