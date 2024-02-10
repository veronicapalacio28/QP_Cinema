import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  ngOnInit() {
    document.body.classList.add('login-body-class');
  }
  ngOnDestroy() {
    document.body.classList.remove('login-body-class');
  }
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private snackBar: MatSnackBar, private router: Router, private authService: AuthService) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  validarFormulario() {
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email')?.value;
      const password = this.loginForm.get('password')?.value;


      this.authService.login(email, password).subscribe(
        response => {
          localStorage.setItem('usuario', JSON.stringify(response));
          this.router.navigate(['/cinema/home']);
        }, error => {
          console.log('response error', error);
          this.snackBar.open('Usuario o contraseña incorrectos', 'Cerrar', {
            duration: 5000,
            verticalPosition: 'top',
            horizontalPosition: 'center',
            panelClass: ['custom-snackbar']
          });

        }
      )

    } else {
      this.snackBar.open('Formulario inválido', 'Cerrar', {
        duration: 5000,
        verticalPosition: 'top',
        horizontalPosition: 'center',
        panelClass: ['custom-snackbar']
      });
    }
  }

  redirigirARegister() {
    console.log('click');
    this.router.navigate(['/auth/register']);
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
