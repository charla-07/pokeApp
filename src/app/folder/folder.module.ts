import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {SearchbarComponent} from '../shared/searchbar/searchbar.component'
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule,
    MatProgressSpinnerModule
  ],
  declarations: [FolderPage, SearchbarComponent]
})
export class FolderPageModule {}
