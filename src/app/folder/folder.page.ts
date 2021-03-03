import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../service/pokemon/pokemon.service';
import { AlertController } from '@ionic/angular';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public pokemon: any = {};
  public showSpinner = true;
  public name: string;
  public stats = [];
  public names = [];
  @ViewChild('barChart', { static: false }) barChart;
  bars: any;


  constructor(private activatedRoute: ActivatedRoute, private pokemonService: PokemonService,
    public alertController: AlertController) {
    this.init();
  }

  ionViewDidEnter() {
    this.init();
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }


  async init() {
    await this.pokemonService.getPokemonByName('pikachu').then((res) => {
      this.pokemon = res;
      console.log(this.pokemon);
      this.createByChart(this.pokemon);
      setTimeout(() => {
        this.showSpinner = false;
      }, 2000);
    }).catch((error: any) => {
      console.log(error);
      this.presentAlert(error);
    });
    this.stats = [];
    this.names = [];
  }

  async getValue(event) {
    await this.pokemonService.getPokemonByName(event).then((res) => {
      this.pokemon = res;
      console.log(this.pokemon);
      
      setTimeout(() => {
        this.showSpinner = false;
      }, 2000);
      this.createByChart(this.pokemon); 
    }).catch((error: any) => {
      console.log(error);
      this.presentAlert(error);
    });
    this.stats = [];
    this.names = [];
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

  async createByChart(name: any) {
    /* Base_stat*/
    for (let i = 0; i < name.stats.length; i++) {
      this.stats.push(name.stats[i].base_stat);
    }
    console.log(this.stats);
    /* Name */
    for (let i = 0; i < name.stats.length; i++) {
      this.names.push(name.stats[i].stat.name);
    }
    console.log(this.names);

    /* Charts */
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'bar',
      data: {
        labels: this.names,
        datasets: [{
          label: 'Stat',
          data: this.stats,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    }
    );

  }
 /*  async chartByEvent(name: any) {
    /* Base_stat
    var stats = [];

    for (let i = 0; i < name.stats.length; i++) {
      stats.push(name.stats[i].base_stat);
    }
    console.log(stats);
    /* Name 
    var names = [];

    for (let i = 0; i < name.stats.length; i++) {
      names.push(name.stats[i].stat.name);
    }
    console.log(names);

    /* Charts 
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'bar',
      data: {
        labels: names,
        datasets: [{
          label: 'Stat',
          data: stats,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    }
    );

  } */
}
