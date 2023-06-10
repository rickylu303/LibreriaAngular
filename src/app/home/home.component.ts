import { Component, OnInit, OnDestroy } from '@angular/core';
import { LibroService } from '../service/libro.service';
import { Libro } from '../domain/libro';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy{

  public libros : Libro[];
  public subLibros : Subscription;

  constructor(public libroService : LibroService){}

  ngOnDestroy(): void {
    this.subLibros.unsubscribe();
  }

  ngOnInit(): void {
    this.getAll();   
  }

  getAll(){
    this.subLibros = this.libroService.getAll().subscribe(data => {
      this.libros = data;
    });
  }
}
