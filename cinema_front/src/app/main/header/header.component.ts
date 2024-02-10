import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatMenu, MatMenuModule } from '@angular/material/menu';
import { MatToolbar } from '@angular/material/toolbar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIcon, MatMenu, MatToolbar, MatMenuModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  name = '';
  role = '';

  constructor(private router: Router) { }
  ngOnInit(): void {
    const usuario = localStorage.getItem('usuario');
    if (usuario) {
      const datosUsuario = JSON.parse(usuario);
      this.name = datosUsuario.nombre;
      this.role = datosUsuario.rol;
    }
  }

  navegar(ruta: string): void {
    this.router.navigate([ruta]);
  }

  cerrarSesion() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
