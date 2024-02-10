import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
// import { Reserva } from './reserva.entity';
import { TipoDocumento } from './user-type.entity';

@Entity('usuario')
@Unique(['correo'])
export class UserEntity {

  @PrimaryGeneratedColumn('increment')
  identificacion: number;

  @Column({ type: 'varchar', length: 20 })
  rol: string;

  @Column({ type: 'int' })
  FK_idtipo: number;

  @Column({ type: 'varchar', length: 40 })
  nombre: string;

  @Column({ type: 'varchar', length: 50 })
  apellido: string;

  @Column({ type: 'varchar', length: 50 })
  correo: string;

  @Column({ type: 'varchar', length: 100 })
  contrasena: string;


  @ManyToOne(() => TipoDocumento, tipoDocumento => tipoDocumento.usuarios)
  @JoinColumn({ name: 'FK_idtipo' })
  tipoDocumento: TipoDocumento;

    // @OneToMany(() => Reserva, reserva => reserva.usuario)
    // reservas: Reserva[];
}