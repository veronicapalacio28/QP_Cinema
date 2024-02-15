import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserEmailService } from '../../services/user-email.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  bookings: any[] = [];
  userEmail: string = '';

  constructor(private http: HttpClient, private userEmailService: UserEmailService,private router: Router) { }

  ngOnInit(): void {
    this.getBookings();
    const usuarioString = localStorage.getItem('usuario');
    if (usuarioString !== null) {
      const usuario = JSON.parse(usuarioString);
      this.userEmail = usuario.correo;
    }
  }

  getBookings() {
    this.http.get<any[]>('http://localhost:3000/bookings').subscribe(data => {
      this.bookings = data.filter(booking => booking.correo === this.userEmail);
    });
  }
  navegar(ruta: string): void {
    this.router.navigate([ruta]);
  }
}
