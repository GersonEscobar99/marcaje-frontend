import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.component.html',
  styleUrls: ['./detalle-usuario.component.css']
})
export class DetalleUsuarioComponent implements OnInit {
  
  user: User | undefined;

  constructor(private usuarioService: UserService, private router: Router, private activatedRoute: ActivatedRoute) {}


  ngOnInit(): void {
     this.activatedRoute.paramMap.subscribe(params => {
      const username = params.get('username');
      if (username){
        this.usuarioService.obtenerUsuario(username).subscribe(user => {
          this.user = user;
        })
      }
     })
  }

 
}
