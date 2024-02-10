import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  ngOnInit() {
    document.body.classList.add('register-body-class');
  }
  ngOnDestroy() {
    document.body.classList.remove('register-body-class');
  }
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private snackBar: MatSnackBar, private authService: AuthService) {
    this.registerForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      FK_idtipo: ['', Validators.required],
      correo: ['', [Validators.required, Validators.pattern(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)]],
      identificacion: ['', Validators.required],
      contrasena: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(25), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{5,}$/)]],
      confirmar_contrasena: ['', Validators.required]
    }, { validator: this.checkPasswords });
  }

  checkPasswords(group: FormGroup) {
    const pass = group.get('contrasena')?.value;
    const confirmPass = group.get('confirmar_contrasena')?.value;
    return pass === confirmPass ? null : { notSame: true };
  }

  registrarUsuario() {
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value).subscribe(
        response => {
          this.snackBar.open(response.message, 'Cerrar', {
            duration: 5000,
            verticalPosition: 'top',
            horizontalPosition: 'center',
            panelClass: ['custom-snackbar']
          });
          if (response.message == "Usuario creado.") {
            this.redirigirALogin();
          }
        }, error => {
          this.snackBar.open('Error insertando usuario, verifique los datos y el correo', 'Cerrar', {
            duration: 5000,
            verticalPosition: 'top',
            horizontalPosition: 'center',
            panelClass: ['custom-snackbar']
          });
        }
      )
      console.log('Formulario de registro:', this.registerForm.value);
    } else {
      console.log('Formulario no es válido');
    }
  }

  redirigirALogin() {
    this.router.navigate(['/auth/login']);
  }
}
