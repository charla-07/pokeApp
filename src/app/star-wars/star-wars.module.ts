import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StarWarsPageRoutingModule } from './star-wars-routing.module';

import { StarWarsPage } from './star-wars.page';
import { SearchbarComponent } from '../shared/searchbar/searchbar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StarWarsPageRoutingModule
  ],
  declarations: [StarWarsPage, SearchbarComponent]
})
export class StarWarsPageModule {}
