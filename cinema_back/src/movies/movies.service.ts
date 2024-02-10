import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MovieEntity } from './entities/movie.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MoviesService {

  constructor(@InjectRepository(MovieEntity) private moviesRepository: Repository<MovieEntity>,) { }

  async create(createMovieDto: CreateMovieDto): Promise<{ message: string }> {
    const newMovie = new MovieEntity();
    newMovie.titulo = createMovieDto.titulo;
    newMovie.sinopsis = createMovieDto.sinopsis;
    newMovie.formato = createMovieDto.formato;
    newMovie.duracion = createMovieDto.duracion;
    newMovie.img_promocional = createMovieDto.img_promocional;
    newMovie.precio = createMovieDto.precio;
    newMovie.horario=createMovieDto.horario;
    newMovie.id_genero=createMovieDto.id_genero;

    await this.moviesRepository.save(newMovie);
    return { message: 'Pelicula creada' };
  }

  async findAll(): Promise<any[]> {
    return await this.moviesRepository.find();
  }

  async findOne(id: number): Promise<any> {
    return await this.moviesRepository.findOne({ where: { id: id } });
  }

  update(id: number, updateMovieDto: UpdateMovieDto) {
    return `This action updates a #${id} movie`;
  }

  remove(id: number) {
    return `This action removes a #${id} movie`;
  }
}