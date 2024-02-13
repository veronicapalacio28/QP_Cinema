import { Injectable } from '@nestjs/common';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Booking } from './entities/booking.entity';
import { CreateBookingDto } from './dto/create-booking.dto';

@Injectable()
export class BookingsService {
  constructor(
    @InjectRepository(Booking) private bookRepository: Repository<Booking>,
  ) { }

  async create(createBookingDto: CreateBookingDto) {
    const reserva = await this.bookRepository.create(createBookingDto);
    return await this.bookRepository.save(reserva);
  }
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

