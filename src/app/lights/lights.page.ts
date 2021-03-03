import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { FirebaseServiceService } from '../service/firebase/firebase-service.service';
import { Day } from '../day';

@Component({
  selector: 'app-lights',
  templateUrl: './lights.page.html',
  styleUrls: ['./lights.page.scss'],
})
export class LightsPage implements OnInit {
  livingroom: any;
  ruta = '/statics';
  day: Day;
  constructor(private firebaseService: FirebaseServiceService, private router: Router) {

    this.firebaseService.getStatus().once('value', (snapshot) => {
      console.log(snapshot.val());
      if (snapshot.val() == "on") {
        this.livingroom = true;
      } else {
        this.livingroom = false;
      }
    })
  }

  ngOnInit() {

  }
  printValue(value) {
    console.log(value);
  }


  async updateStatus() {
    const value = this.livingroom ? 'on' : 'off';
    this.firebaseService.updateLight(value).then((res) => {
      console.log(res);
    }).catch((error) => {
      console.log('error ' + error)
    });

    if (value == "on") {
      this.firebaseService.updateInicio(Date.now()).then((res) => {
        console.log(res);
      }).catch((error) => {
        console.log('error ' + error)
      });
    } else {
      this.firebaseService.updateFin(Date.now()).then((res) => {
        const tiempoTranscurrido = Date.now();
        const hoy = new Date(tiempoTranscurrido);
        this.firebaseService.getDate().on('value', (snapshot) => {
          if (snapshot.val() != hoy.toLocaleDateString()) {
            this.day = new Day(hoy.toLocaleDateString(), 0);
            console.log(this.day);
            this.firebaseService.createDate(this.day);
            this.firebaseService.updateDate(hoy.toLocaleDateString());

          }
          var horas = 0;
          var fin;
          var inicio;
          this.firebaseService.getFin().subscribe((res) => {
            fin = res;
          });
          this.firebaseService.getInicio().subscribe((resp) => {
            inicio = resp;
            horas = horas + (fin - inicio) / 1000;
            console.log(horas);
          });
          
        })


      }).catch((error) => {
        console.log('error ' + error)
      });
    }

  }

  async getValue(event) {
    console.log(event)
  }

  getStatistics() {
    this.router.navigate([this.ruta]);
    console.log("ya entre")
  }

}
