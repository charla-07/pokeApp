import { Component, OnInit } from '@angular/core';
import { StarWarsPage } from '../star-wars.page';

@Component({
  selector: 'app-nave',
  templateUrl: './nave.page.html',
  styleUrls: ['./nave.page.scss'],
})
export class NavePage implements OnInit {

  constructor(private stars: StarWarsPage) { 
    this.stars.init();
  }

  ngOnInit() {
  }

  IonViewDidEnter(){
    this.stars.init();
  }

}
