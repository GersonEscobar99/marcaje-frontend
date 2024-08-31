import { Component, OnInit } from '@angular/core';
import { MarcajeService } from '../../services/marcaje.service';
import { Marcaje } from '../../interfaces/marcaje.interface';

@Component({
  selector: 'app-lista-marcaje',
  templateUrl: './lista-marcaje.component.html',
  styleUrls: ['./lista-marcaje.component.css']
})
export class ListaMarcajeComponent implements OnInit {

  username: string = '';
  marcajes: Marcaje[]= [];
  currentPage: number = 0;
  totalPages!: number;
  
  constructor(private marcajeService: MarcajeService){}


  ngOnInit(): void {
    this.cargarMarcajes(this.currentPage);
  }

    cargarMarcajes(page:number) {
      this.marcajeService.obtenerMarcajesPaginados(page, 10).subscribe(data =>{
        this.marcajes = data.content;
        this.totalPages = data.totalPages;
      }
      );
  
    }



  obtenerMarcajesPaginados(): void {
      this.marcajeService.obtenerMarcajesPaginados(this.currentPage, 10).subscribe(response => {
      this.marcajes = response.content; 
      this.totalPages = response.totalPages; 
    });
  }

  siguientePagina() {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.cargarMarcajes(this.currentPage);
    }
  }

  paginaAnterior() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.cargarMarcajes(this.currentPage);
    }
  }

  obtenerHora(fechaHora: string): string {
    const fecha = new Date(fechaHora);
    const horas = fecha.getHours().toString().padStart(2, '0');
    const minutos = fecha.getMinutes().toString().padStart(2, '0');
    const segundos = fecha.getSeconds().toString().padStart(2, '0');
    return `${horas}:${minutos}:${segundos}`;
  }


  obtenerFecha(fechaHora: string): string {
    const fecha = new Date(fechaHora);
    const dia = fecha.getDate().toString().padStart(2, '0');
    const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
    const año = fecha.getFullYear();

    return `${dia}-${mes}-${año}`
  }
  
}
