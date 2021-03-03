import {  CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { StatisticsComponent } from './statistics/statistics.component';

@NgModule({
  declarations: [SearchbarComponent, StatisticsComponent],
  imports: [
    CommonModule
  ], 
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [SearchbarComponent, StatisticsComponent]
})
export class SharedModule { }
