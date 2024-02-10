import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { CinemaComponent } from './cinema/cinema.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MoviesComponent } from './movies/movies.component';
import { ReservesComponent } from './reserves/reserves.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: '', component: CinemaComponent, children: [
    {path: 'home', component: HomeComponent},
    {path: 'movies', component: MoviesComponent},
    {path: 'movies/:id', component: MovieDetailComponent},
    {path: 'reserves', component: ReservesComponent},
    {path: 'admin', component: AdminComponent},

  ]},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    HeaderComponent,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ]
})
export class MainModule { }
