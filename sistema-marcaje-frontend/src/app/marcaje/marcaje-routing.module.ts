import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaUsuariosComponent } from './pages/lista-usuarios/lista-usuarios.component';
import { DetalleUsuarioComponent } from './pages/detalle-usuario/detalle-usuario.component';
import { AuthGuard } from '../auth.guard';
import { EntradaComponent } from './pages/entrada/entrada.component';
import { SalidaComponent } from './pages/salida/salida.component';
import { HistorialComponent } from './pages/historial/historial.component';
import { EditarUsuarioComponent } from './pages/editar-usuario/editar-usuario.component';
import { ListaMarcajeComponent } from './pages/lista-marcaje/lista-marcaje.component';

const routes: Routes = [
  {
    path:'listaUsuarios',
    component: ListaUsuariosComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'listaUsuarios/:username',
    component: DetalleUsuarioComponent,
    canActivate:[AuthGuard]
  },
  { path: 'entrada', 
    component: EntradaComponent,
    canActivate: [AuthGuard] 
  },
  { path: 'salida', 
    component: SalidaComponent, 
    canActivate: [AuthGuard] 
  },
  { path: 'historialMarcajePorUsuario', 
    component: HistorialComponent,
    canActivate: [AuthGuard] 
  },
  {
    path:'editar/:usuarioId',
    component:EditarUsuarioComponent,
    canActivate: [AuthGuard] 

  },
  {
    path: 'historialMarcajes',
    component: ListaMarcajeComponent,
    canActivate: [AuthGuard] 
    
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarcajeRoutingModule { }
