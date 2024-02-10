import { Component,OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent   implements OnInit{
  movies: any[] = [];
  bookings: any[] = [];
  nuevaPelicula: any = {
    titulo: '',
    genero: '',
    sinopsis: '',
    imagen: '',
    formato: '',
    duracion: '',
    valor: ''
  };
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:3000/movies').subscribe(
      (data) => {
        this.movies =  data;
      },
      (error) => {
        console.error('Error al obtener datos:', error);
      }
    );
    this.http.get<any[]>('http://localhost:3000/bookings').subscribe(
      (bookingsData) => {
        // Iterar sobre cada reserva y cambiar el nombre de la sala según el ID
        this.bookings = bookingsData.map(booking => {
          switch (booking.FK_idsala) {
            case 1:
              booking.nombre_sala = 'Sala 1';
              break;
            case 2:
              booking.nombre_sala = 'Sala 2';
              break;
            case 3:
              booking.nombre_sala = 'Sala 3';
              break;
            case 4:
              booking.nombre_sala = 'Sala 4';
              break;
            case 5:
              booking.nombre_sala = 'Sala 5';
              break;
            case 6:
              booking.nombre_sala = 'Sala 6';
              break;
            // Agrega más casos según sea necesario
            default:
              booking.nombre_sala = 'Sala Desconocida';
              break;
          }
          const row = String.fromCharCode(65 + Math.floor((booking.id_silla - 1) / 4)); // Convertir el número de silla en fila (A, B, C, ...)
          const column = (booking.id_silla - 1) % 4 + 1; // Calcular la columna (1, 2, 3, 4)
          booking.nombre_silla = row + column;
          return booking;
        });
      },
      (error) => {
        console.error('Error al obtener datos de reservas:', error);
      }
    );
  }

  getGenreName(idGenero: number): string {
    switch (idGenero) {
      case 1:
        return 'Acción';
      case 2:
        return 'Aventura';
      case 3:
        return 'Comedia';
      case 4:
        return 'Ciencia Ficción';
      case 5:
        return 'Animación';
      case 6:
        return 'Drama';
      case 7:
        return 'Documentales';
      case 8:
        return 'Fantasía';
      case 9:
        return 'Terror';
      default:
        return 'Desconocido';
    }
  }
  getMovieTitle(idPelicula: number): string {
    const movie = this.movies.find(movie => movie.id === idPelicula);
    return movie ? movie.titulo : 'Título Desconocido';
  }
  calculateTotalValue(booking: any): number {
    const movie = this.movies.find(movie => movie.id === booking.FK_idpelicula);
    if (movie) {
      return booking.cantidad * movie.precio;
    }
    return 0;
  }
  getStatusLabel(status: number): string {
    return status === 0 ? 'Activa' : 'Cancelada';
  }
}
