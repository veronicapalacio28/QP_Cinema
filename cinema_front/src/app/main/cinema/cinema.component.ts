import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cinema',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './cinema.component.html',
  styleUrl: './cinema.component.css'
})
export class CinemaComponent implements OnInit{
  constructor(private snackBar: MatSnackBar) {}
  ngOnInit(): void {
    this.snackBar.open('Bienvenido', 'Cerrar', {
        duration: 5000,
        verticalPosition: 'top',
        horizontalPosition: 'center',
        panelClass: ['custom-snackbar'] 
      });
  }

}
