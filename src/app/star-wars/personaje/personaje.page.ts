import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { PeopleService } from 'src/app/service/people/people.service';
import {StarWarsPage} from '../star-wars.page';
@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.page.html',
  styleUrls: ['./personaje.page.scss'],
})
export class PersonajePage implements OnInit {
  public people: any = {};
  public showSpinner = true;

  constructor(private stars: StarWarsPage) {
  this.stars.init();
}

ngOnInit() {
}
IonViewDidEnter(){
  this.stars.init();
}
  
}
