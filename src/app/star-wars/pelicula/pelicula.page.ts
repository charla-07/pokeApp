import { Component, OnInit } from '@angular/core';
import {StarWarsPage} from '../star-wars.page';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.page.html',
  styleUrls: ['./pelicula.page.scss'],
})
export class PeliculaPage implements OnInit {

  constructor(private stars: StarWarsPage) {
    this.stars.init();
   }

  ngOnInit() {
  }

  IonViewDidEnter(){
    this.stars.init();
  }

}
