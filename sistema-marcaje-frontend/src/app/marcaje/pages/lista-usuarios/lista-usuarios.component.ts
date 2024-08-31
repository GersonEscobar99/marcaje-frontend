import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {
  usuarios:User [] = [];
  currentPage: number = 0;
  totalPages!: number;

  isLoading = false;

  constructor(private usuarioService: UserService, router:Router) {}

  ngOnInit() {
    this.cargarUsuarios(this.currentPage);
  }

  cargarUsuarios(page: number) {
    this.usuarioService.obtenerUsuariosPaginados(page, 10).subscribe(data => {
      this.usuarios = data.content;
      this.totalPages = data.totalPages;
    });
  }


  obtenerUsuariosPaginados(): void {
    this.usuarioService.obtenerUsuariosPaginados(this.currentPage, 10).subscribe(response => {
      this.usuarios = response.content; 
      this.totalPages = response.totalPages;
    });
  }

  siguientePagina() {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.cargarUsuarios(this.currentPage);
    }
  }

  paginaAnterior() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.cargarUsuarios(this.currentPage);
    }
  }

  eliminarUsuario(id: number): void {
    if (confirm('¿Estás seguro de que quieres eliminar este usuario?')) {
      this.usuarioService.eliminarUsuario(id).subscribe(() => {

        this.obtenerUsuariosPaginados();
      }, error => {
        console.error('Error al eliminar el usuario', error);
      });
    }
  }

}
