import { MoviesService } from '../../services/movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule, FormsModule], // Agregar FontAwesomeModule aquí
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'] // Corregir el nombre de la propiedad de estilos
})
export class BookComponent implements OnInit {
  movieId!: string;
  movieDetails: any;
  selectedHour: string = '';
  rows = [
    ['A1', 'A2', 'A3', 'A4'],
    ['B1', 'B2', 'B3', 'B4'],
    ['C1', 'C2', 'C3', 'C4'],
    ['D1', 'D2', 'D3', 'D4']
];



  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.movieId = this.route.snapshot.paramMap.get('id') || '';
    this.selectedHour = this.getHoursList()[0];
    console.log('movieee', this.movieId)
    try {
      this.moviesService.getMovieById(this.movieId).subscribe(
        response => {
          this.movieDetails = response;
        }, error => {
          console.log('error');
        }
      );

    } catch (error) {
      console.error(error);
    }
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
        return 'Ciencia ficción';
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

  getHoursList(): string[] {
    if (!this.movieDetails || !this.movieDetails.horario) {
      return [];
    }
    return this.movieDetails.horario.split('-');
  }
}
