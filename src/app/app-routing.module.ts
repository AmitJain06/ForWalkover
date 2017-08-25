import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PeopleComponent }      from './people/people.component';
import { PlanetComponent }      from './planet/planet.component';
import { StarshipComponent }      from './starship/starship.component';

const routes: Routes = [
  { path: 'people', component: PeopleComponent },
  { path: 'planet', component: PlanetComponent },
  { path: 'starships', component: StarshipComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }