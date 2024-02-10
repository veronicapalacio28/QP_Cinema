import { Injectable } from '@nestjs/common';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { InjectRepository } from '@nestjs/typeorm';
// import { BookingEntity} from './entities/booking.entity';
import { Repository } from 'typeorm';
import { Booking } from './entities/booking.entity';
import { CreateBookingDto } from './dto/create-booking.dto';

@Injectable()
export class BookingsService {
  // constructor(@InjectRepository(BookingEntity) private BookingsRepository: Repository<BookingEntity>,) { }
  constructor(
    @InjectRepository(Booking) private bookRepository: Repository<Booking>,
  ) {}

async create(createBookingDto: CreateBookingDto) {
    const reserva = await this.bookRepository.create(createBookingDto);
    return await this.bookRepository.save(reserva);
  }
  // async create(createBookingDto: CreateBookingDto): Promise<{ message: string }> {
  //   const newBooking = new BookingEntity();
  //   newBooking.FK_identificacion = createBookingDto.FK_identificacion;
  //   newBooking.FK_idpelicula = createBookingDto.FK_idpelicula;
  //   newBooking.FK_sala = createBookingDto.FK_sala;
  //   newBooking.id_silla = createBookingDto.id_silla;
  //   newBooking.cantidad = createBookingDto.cantidad;
  //   newBooking.valor_total = createBookingDto.valor_total;
  //   newBooking.estado = createBookingDto.estado;

  //   // newBooking.horario
  //   // newBooking.genero
  //   await this.BookingsRepository.save(newBooking);
  //   return { message: 'Reserva creada' };
  // }

 
  async findAll(): Promise<any[]> {
    return await this.bookRepository.find();
  }

  async findOne(id: number): Promise<any> {
    return await this.bookRepository.findOne({ where: { id_reserva: id } });
  }


  update(id: number, updateBookingDto: UpdateBookingDto) {
    return `This action updates a #${id} booking`;
  }

  remove(id: number) {
    return `This action removes a #${id} booking`;
  }
}

