import { Component, OnInit } from '@angular/core';
import { StarWarsPage } from '../star-wars.page';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.page.html',
  styleUrls: ['./vehiculo.page.scss'],
})
export class VehiculoPage implements OnInit {

  constructor(private stars: StarWarsPage) { 
    this.stars.init();
  }

  ngOnInit() {
  }

  IonViewDidEnter(){
    this.stars.init();
  }

}
