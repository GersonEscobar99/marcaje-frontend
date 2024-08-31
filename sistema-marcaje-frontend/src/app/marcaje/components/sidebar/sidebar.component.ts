import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { MarcajeService } from '../../services/marcaje.service';
import { Login } from '../../interfaces/login.interface';

@Component({
  selector: 'marcaje-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  loginData: Login = {
    username: '',
    password: ''
  };

  constructor(private loginService: LoginService,
              private router: Router,
              private marcajeService: MarcajeService){}

  onLogout(){
    this.loginService.logout();
    alert('Saliste correctamente.');
    this.router.navigate(['/home']);
  }

  form(){
    // Obtén el nombre de usuario del localStorage
    const username = localStorage.getItem('username');

    if (username) {
      // Verifica el último marcaje
      this.marcajeService.obtenerUltimoMarcaje(username).subscribe(
        (marcaje) => {
          if (marcaje && !marcaje.horaSalida) {
            // Si ya marcó entrada pero no salida, redirige a la página de salida
            this.router.navigate(['/marcajes/salida']);
          } else {
            // Si no ha marcado entrada o ya marcó salida, redirige a la página de entrada
            this.router.navigate(['/marcajes/entrada']);
          }
        },
        (error) => {
          console.error('Error al obtener el último marcaje', error);

          // En caso de error, redirige a la página de entrada
          this.router.navigate(['/marcajes/entrada']);
        }
      );
    } else {
      // Si no hay un usuario logueado, redirige a la página de login
      this.router.navigate(['/login']);
    }
  }

}
