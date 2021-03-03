import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {
  estado: any;
  public value = [];
  constructor(private firebase: AngularFireDatabase) { 

  }

  updateLight(status: any){
    return this.firebase.object('/casa/foco1').update(({status: status}));
  }

  getStatus(){
    return this.firebase.database.ref('/casa/foco1').child('status');
  }

  updateInicio(time: any){
    return this.firebase.object('/casa/foco1').update(({timeOn: time}));
  }
  updateFin(time: any){
    return this.firebase.object('/casa/foco1').update(({timeOff: time}));
  }

  createDate(day: any){
    return this.firebase.database.ref('/casa/foco1/dias').push(day);
  }
  getDate(){
    return this.firebase.database.ref('/casa/foco1/dias').child('fecha');
  }

  updateDate(date: any){
    return this.firebase.object('/casa/foco1/dias').update(({fecha: date}));
  }
  getDay(){
    return this.firebase.database.ref('/casa/foco1/dias').child('day');
  }
  getInicio(){
    return this.firebase.object('/casa/foco1/timeOn').valueChanges();
  }
  getFin(){
    return this.firebase.object('/casa/timeOff').valueChanges();
  }



}
