import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NavePageRoutingModule } from './nave-routing.module';

import { NavePage } from './nave.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NavePageRoutingModule
  ],
  declarations: [NavePage]
})
export class NavePageModule {}
