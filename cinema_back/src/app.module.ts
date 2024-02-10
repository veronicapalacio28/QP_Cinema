import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { UsersModule } from './users/users.module';
import { MoviesModule } from './movies/movies.module';
import { BookingsModule } from './bookings/bookings.module';
import { UserEntity } from './users/entities/user.entity';
import { TipoDocumento } from './users/entities/user-type.entity';
import { MovieEntity } from './movies/entities/movie.entity';
import { Booking } from './bookings/entities/booking.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'quality',
      entities: [UserEntity, TipoDocumento, MovieEntity, Booking],
      synchronize: true,
    }),
    UsersModule,
    MoviesModule,
    BookingsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}