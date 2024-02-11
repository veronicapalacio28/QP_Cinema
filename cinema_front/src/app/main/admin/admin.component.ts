import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {
  movies: any[] = [];
  bookings: any[] = [];
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:3000/movies').subscribe(
      (data) => {
        this.movies = data;
      },
      (error) => {
        console.error('Error al obtener datos:', error);
      }
    );
    this.http.get<any[]>('http://localhost:3000/bookings').subscribe(
      (bookingsData) => {
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
            default:
              booking.nombre_sala = 'Sala Desconocida';
              break;
          }
          const row = String.fromCharCode(65 + Math.floor((booking.id_silla - 1) / 4));
          const column = (booking.id_silla - 1) % 4 + 1;
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
  enviarPelicula(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const newMovie = {
      titulo: (form.querySelector('input[name="titulo"]') as HTMLInputElement).value,
      sinopsis: (form.querySelector('textarea[name="sinopsis"]') as HTMLTextAreaElement).value,
      formato: (document.getElementById('formato') as HTMLSelectElement).value,
      duracion: parseInt((form.querySelector('input[name="duracion"]') as HTMLInputElement).value),
      img_promocional: (form.querySelector('input[name="img_promocional"]') as HTMLInputElement).value,
      precio: parseFloat((form.querySelector('input[name="precio"]') as HTMLInputElement).value),
      horario: (form.querySelector('input[name="horario"]') as HTMLInputElement).value,
      id_genero: parseInt((document.getElementById('genero') as HTMLSelectElement).value)
    };
    this.http.post('http://localhost:3000/movies', newMovie)
      .subscribe(
        (response) => {
          console.log('Película enviada con éxito:', response);
        },
        (error) => {
          console.error('Error al enviar la película:', error);
        }
      );
  }
}
