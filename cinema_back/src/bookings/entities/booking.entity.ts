import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity("reserva")
export class Booking {
  @PrimaryGeneratedColumn()
  id_reserva: number;

  @Column()
  FK_identificacion: number;

  @Column()
  FK_idpelicula: number;

  @Column()
  FK_idsala: number;

  @Column()
  id_silla: number;

  @Column()
  horario: string;

  @Column()
  estado: number;
}

