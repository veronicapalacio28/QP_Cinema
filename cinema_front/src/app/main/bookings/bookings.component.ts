import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { UserEmailService } from '../../services/user-email.service'; // Importa el servicio

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

  constructor(private http: HttpClient, private userEmailService: UserEmailService) { }

  ngOnInit(): void {
    this.getBookings();
    // Obtén el correo electrónico del usuario del localStorage
    const usuarioString = localStorage.getItem('usuario');
    if (usuarioString !== null) { // Verifica si usuarioString no es null
      const usuario = JSON.parse(usuarioString);
      this.userEmail = usuario.correo;
    }
  }
  getBookings() {
    this.http.get<any[]>('http://localhost:3000/bookings').subscribe(data => {
      this.bookings = data;
    });
  }

}
