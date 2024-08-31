import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { MarcajeRoutingModule } from './marcaje-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ListaUsuariosComponent } from './pages/lista-usuarios/lista-usuarios.component';
import { DetalleUsuarioComponent } from './pages/detalle-usuario/detalle-usuario.component';
import { EntradaComponent } from './pages/entrada/entrada.component';
import { SalidaComponent } from './pages/salida/salida.component';
import { HistorialComponent } from './pages/historial/historial.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { EditarUsuarioComponent } from './pages/editar-usuario/editar-usuario.component';
import { HomeMarcajeComponent } from './components/home-marcaje/home-marcaje.component';
import { ListaMarcajeComponent } from './pages/lista-marcaje/lista-marcaje.component';

@NgModule({
  declarations: [
    ListaUsuariosComponent,
    DetalleUsuarioComponent,
    EntradaComponent,
    SalidaComponent,
    HistorialComponent,
    SidebarComponent,
    EditarUsuarioComponent,
    HomeMarcajeComponent,
    ListaMarcajeComponent
  ],
  imports: [
    CommonModule,
    MarcajeRoutingModule,
    MatSidenavModule,
    MatCardModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    SharedModule,
    FormsModule
  ]
})
export class MarcajeModule { }
