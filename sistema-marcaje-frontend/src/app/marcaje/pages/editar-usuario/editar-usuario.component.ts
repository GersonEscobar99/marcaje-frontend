import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit{

  usuarioId!:number;

  usuario: User = {
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    perfil: ''
  };

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.usuarioId = this.route.snapshot.params['usuarioId'];
    this.userService.obtenerUsuarioPorId(this.usuarioId).subscribe(data => {
      this.usuario = data;
    }, error => console.log(error));
  }


  onSubmit() {
    this.userService.actualizarUsuario(this.usuarioId, this.usuario).subscribe(data => {
      this.router.navigate(['/marcajes/listaUsuarios']);
      alert("se ha actualizado el usuario correctamete")
    }, error => console.log(error));
  }
}