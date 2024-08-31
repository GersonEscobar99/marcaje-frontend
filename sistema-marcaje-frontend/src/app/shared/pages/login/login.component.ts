import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Login } from 'src/app/marcaje/interfaces/login.interface';
import { AuthService } from 'src/app/marcaje/services/Auth.service';
import { LoginService } from 'src/app/marcaje/services/login.service';
import { MarcajeService } from 'src/app/marcaje/services/marcaje.service';
import swal from 'sweetalert2';


@Component({
  selector: 'shared-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginData: Login = {
    username: '',
    password: ''
  };

  constructor(
    private snack: MatSnackBar,
    private loginService: LoginService,
    private marcajeService: MarcajeService,
    private router: Router,
    private authService: AuthService){}


    formSubmit() {
      this.loginService.login(this.loginData.username, this.loginData.password).subscribe(
        (response) => {
      
          console.log('Usuario ingresado exitosamente', response);
          swal.fire('Iniciando sesión', 'Usuario ingresado', 'success');
  
          localStorage.setItem('username', this.loginData.username);
  
          this.marcajeService.obtenerUltimoMarcaje(this.loginData.username).subscribe(
            (marcaje) => {
              if (marcaje && !marcaje.horaSalida) {
                this.router.navigate(['/marcajes/salida']);
              } else {
                this.router.navigate(['/marcajes/entrada']);
              }
            },
            (error) => {
              console.error('Error al obtener el último marcaje', error);
              this.snack.open('Error al obtener el estado del marcaje', 'Aceptar', {
                duration: 2000,
                verticalPosition: 'top',
                horizontalPosition: 'right'
              });

              this.router.navigate(['/marcajes/entrada']);
            }
          );
        },
        (error) => {
          console.error('Error al intentar ingresar', error);
          this.snack.open("Ha ocurrido un error en el sistema", "Aceptar", {
            duration: 1000,
            verticalPosition: 'top',
            horizontalPosition: 'right'
          });
        }
      );
    }

    onLogin() {
      this.authService.login(this.loginData.username, this.loginData.password).subscribe(
        (response) => {
      
          console.log('Usuario ingresado exitosamente', response);
          swal.fire('Iniciando sesión', 'Usuario ingresado', 'success');
  
          localStorage.setItem('username', this.loginData.username);
  
          this.marcajeService.obtenerUltimoMarcaje(this.loginData.username).subscribe(
            (marcaje) => {
              if (marcaje && !marcaje.horaSalida) {
                this.router.navigate(['/marcajes/salida']);
              } else {
                this.router.navigate(['/marcajes/entrada']);
              }
            },
            (error) => {
              console.error('Error al obtener el último marcaje', error);
              this.snack.open('Error al obtener el estado del marcaje', 'Aceptar', {
                duration: 2000,
                verticalPosition: 'top',
                horizontalPosition: 'right'
              });

              this.router.navigate(['/marcajes/entrada']);
            }
          );
        },
        (error) => {
          console.error('Error al intentar ingresar', error);
          this.snack.open("Ha ocurrido un error en el sistema", "Aceptar", {
            duration: 1000,
            verticalPosition: 'top',
            horizontalPosition: 'right'
          });
        }
      );
    }
  
}
