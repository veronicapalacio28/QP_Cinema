import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  usuario: any;
  identificacion: string = "";
  nombre: string = "";
  apellido: string = "";
  correo: string = "";
  rol: string = "";

  constructor() { }

  ngOnInit(): void {
    var usuarioString = localStorage.getItem('usuario');
    if (usuarioString !== null) {
      var usuario = JSON.parse(usuarioString);
      this.identificacion = usuario.identificacion;
      this.nombre = usuario.nombre;
      this.apellido = usuario.apellido;
      this.correo = usuario.correo;
      if (usuario.rol==2){
        this.rol="Administrador"
      }else{
        this.rol="Cliente"
      }
    }
  }
}
