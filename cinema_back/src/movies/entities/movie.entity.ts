import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity('pelicula')
export class MovieEntity {

    @PrimaryGeneratedColumn('increment')
    id: number;
    @Column({ type: 'varchar', length: 50 })
    titulo: string;
    @Column('text')
    sinopsis: string;
    @Column({ type: 'varchar', length: 4 })
    formato: string;
    @Column({ type: 'int' })
    duracion: number;
    @Column({ type: 'varchar', length: 2000 })
    img_promocional: string;
    @Column({ type: 'int' })
    precio: number;
    @Column({ type: 'varchar', length: 50 })
    horario: string;
    @Column({ type: 'int' })
    id_genero: number;
}