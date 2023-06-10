import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { HomeComponent } from './home/home.component';
import { ReservacionComponent } from './reservacion/reservacion.component';

import { HttpClientModule } from '@angular/common/http';

import { AutorService } from './service/autor.service';
import { LibroService } from './service/libro.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CategoriaComponent,
    HomeComponent,
    ReservacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AutorService,
    LibroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
