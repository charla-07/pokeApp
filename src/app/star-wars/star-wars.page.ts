import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { FilmsService } from '../service/films/films.service';
import { PeopleService } from '../service/people/people.service';
import { VehiclesService } from '../service/vehicles/vehicles.service';
import { StarshipsService } from '../service/starships/starships.service';

@Component({
  selector: 'app-star-wars',
  templateUrl: './star-wars.page.html',
  styleUrls: ['./star-wars.page.scss'],
})
export class StarWarsPage implements OnInit {
  public people: any = {};
  public vehicles= [];
  public vehicle = [];
  public films = [];
  public starships = [];
  public showSpinner = true;

  constructor(private peopleService: PeopleService, public alertController: AlertController,
    private filmsService: FilmsService, public vehicleService: VehiclesService, 
    private starshipsService: StarshipsService) {

  }

  ngOnInit() {
  }

  async init() {
    this.vehicle = [];
    await this.peopleService.getPeople(1).then((res) => {
      this.people = res;
      //VEHICLES
    for (let i = 0; i < this.people.vehicles.length; i++) {
      this.vehicleService.getVehicles(this.people.vehicles[i]).then((res) => {
        this.vehicle.push(res);
      })
    }
    this.vehicle = [];
    //FILMS
    for (let i = 0; i < this.people.films.length; i++) {
      this.filmsService.getFilms(this.people.films[i]).then((res) => {
        this.films.push(res);
      })
    }
    this.films = [];
    //NAVES
    for (let i = 0; i < this.people.starships.length; i++) {
      this.starshipsService.getStarships(this.people.starships[i]).then((res) => {
        this.starships.push(res);
      })
    }
    this.starships = [];

      setTimeout(() => {
        this.showSpinner = false;
      }, 2000);

    }).catch((error: any) => {
      console.log(error);
      this.presentAlert(error);
    });
    
  }

  getValue(event) {
    this.people = [];
    this.peopleService.getPeople(event).then((res) => {
      this.people = res;
     //VEHICLES 
      for (let i = 0; i < this.people.vehicles.length; i++) {
        this.vehicleService.getVehicles(this.people.vehicles[i]).then((res) => {
          this.vehicle.push(res);
        })
      }
      this.vehicles = this.vehicle
      console.log(this.vehicle);
      this.vehicle=[];
      
      //FILMS
    for (let i = 0; i < this.people.films.length; i++) {
      this.filmsService.getFilms(this.people.films[i]).then((res) => {
        this.films.push(res);
      })
    }
    this.films = [];
    console.log(this.films);
    //NAVES
    for (let i = 0; i < this.people.starships.length; i++) {
      this.starshipsService.getStarships(this.people.starships[i]).then((res) => {
        this.starships.push(res);
      })
    }
    this.starships = [];
    console.log(this.starships);

      setTimeout(() => {
        this.showSpinner = false;
      }, 2000);
    }).catch((error: any) => {
      console.log(error);
      this.presentAlert(error);
    });
  }

  async presentAlert(msj: any) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alerta',
      subHeader: 'No escribiste el nombre correctamente.',
      message: msj,
      buttons: ['OK']
    });

    await alert.present();
  }
}
