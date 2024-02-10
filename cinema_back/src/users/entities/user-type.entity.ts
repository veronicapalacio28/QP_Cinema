import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { UserEntity } from './user.entity';

@Entity('tipo_documento')
export class TipoDocumento {
    @PrimaryGeneratedColumn({ name: 'id_tipo' })
    idTipo: number;

    @Column()
    tipo: string;

    @OneToMany(() => UserEntity, usuario => usuario.FK_idtipo)
    usuarios: UserEntity[];
}