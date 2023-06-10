import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaComponent } from './categoria/categoria.component';
import { HomeComponent } from './home/home.component';
import { ReservacionComponent } from './reservacion/reservacion.component';

const routes: Routes = [
  { path: 'categorias', component: CategoriaComponent },
  { path: 'home', component: HomeComponent },
  { path: 'reservacion', component: ReservacionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
