import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent implements OnInit {
  movieId!: string;
  movieDetails: any;

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService
  ) { }

  ngOnInit() {
    this.movieId = this.route.snapshot.paramMap.get('id') || '';
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
}
