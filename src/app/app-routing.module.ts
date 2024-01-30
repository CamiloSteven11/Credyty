import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistroIngresoComponent } from './components/ingreso/registro-ingreso/registro-ingreso.component';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'ingreso', loadChildren: () => import('./components/ingreso/ingreso.module').then(m => m.IngresoModule) },
  { path: 'salida', loadChildren: () => import('./components/salida/salida.module').then(m => m.SalidaModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
