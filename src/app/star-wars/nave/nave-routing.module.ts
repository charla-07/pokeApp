import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavePage } from './nave.page';

const routes: Routes = [
  {
    path: '',
    component: NavePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavePageRoutingModule {}
