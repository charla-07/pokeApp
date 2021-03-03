import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StarWarsPage } from './star-wars.page';

const routes: Routes = [
  {
    path: '',
    component: StarWarsPage,
    children: [
      {
        path: 'personaje',
        loadChildren: () => import('./personaje/personaje.module').then(m => m.PersonajePageModule)
      },
      {
        path: 'vehiculos',
        loadChildren: () => import('./vehiculo/vehiculo.module').then( m => m.VehiculoPageModule)
      },
      {
        path: '',
        redirectTo: '/star-wars/personaje',
        pathMatch: 'full'
      },
      {
        path: 'peliculas',
        loadChildren: () => import('./pelicula/pelicula.module').then( m => m.PeliculaPageModule)
      },
      {
        path: 'naves',
        loadChildren: () => import('./nave/nave.module').then( m => m.NavePageModule)
      },
    ]
  },
  {
    path: '',
    redirectTo: '/star-wars/personaje',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StarWarsPageRoutingModule { }
