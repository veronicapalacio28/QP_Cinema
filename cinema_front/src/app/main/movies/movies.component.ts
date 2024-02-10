import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {
  movies: any[] = [];
  constructor(private moviesService: MoviesService, private router: Router) {
  }
  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.moviesService.getAllMovies().subscribe(
      response => {
        this.movies = response;
      }, error => {
        console.log('error');
      }
    )
  }

  movieDetail(id: string) {
    this.router.navigate(['cinema/movies', id])
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
}
