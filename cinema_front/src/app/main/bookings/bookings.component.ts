import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  bookings: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getBookings();
  }

  getBookings() {
    this.http.get<any[]>('http://localhost:3000/bookings').subscribe(data => {
      console.log(data);
      this.bookings = data;
    });
  }
}
