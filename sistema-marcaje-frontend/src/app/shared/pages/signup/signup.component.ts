import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/marcaje/interfaces/user.interface';
import { UserService } from 'src/app/marcaje/services/user.service';
import swal from 'sweetalert2';

@Component({
  selector: 'shared-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  public user: User = {
    username: '',
    password: '',
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    perfil: ''
  };

  alertMessage: string | null = null;
  alertClass: string = '';
    
  constructor(private userService: UserService, private router: Router){}

  formSubmit() {
    if (this.user.nombre && this.user.apellido && this.user.email && this.user.telefono && this.user.username && this.user.password) {
      this.userService.addUser(this.user).subscribe(
        (response) => {
          swal.fire('Registro de usuario correcto.', '¡Usuario Agregado!', 'success');
          this.router.navigate(['/marcajes/listaUsuarios']);
        },
        (error) => {
          this.showAlert('Nombre de usuario o contraseña incorrectos.', 'alert-danger');
          console.log('no se agrego')
        }
      );
    } else {

    }
  }

  showAlert(message: string, alertClass: string) {
    this.alertMessage = message;
    this.alertClass = alertClass;
    setTimeout(() => {
      this.alertMessage = null;
    }, 1000);
  }

  onSubmit(){
    this.router.navigate(['/marcajes/listaUsuario']);
  }
}
