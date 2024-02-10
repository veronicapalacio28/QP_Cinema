// export class CreateBookingDto {
//     FK_identificacion: number
//     FK_idpelicula: number;
//     FK_sala: number;
//     id_silla: number;
//     cantidad: number;
//     valor_total: number;
//     estado: number;
// }

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
  cantidad: number;

  @IsNotEmpty()
  valor_total: number;

  @IsNotEmpty()
  estado: boolean;
}