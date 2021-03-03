import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LightsPageRoutingModule } from './lights-routing.module';

import { LightsPage } from './lights.page';
import {SearchbarComponent} from '../shared/searchbar/searchbar.component'
import {StatisticsComponent} from '../shared/statistics/statistics.component'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LightsPageRoutingModule,
  ],
  declarations: [LightsPage, SearchbarComponent,StatisticsComponent]
})
export class LightsPageModule {}
