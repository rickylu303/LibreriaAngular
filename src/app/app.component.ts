import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Libreria Angular';
  firstLoad: boolean = true;
  ventana = window;
  searchText : string;

  ngOnInit(): void {
    this.firstLoad = window.location.pathname == "/";
  }
}
