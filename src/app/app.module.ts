import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';

import { PeopleComponent } from './people/people.component';
import {PeopleService} from './people/people.service';

import { StarshipComponent } from './starship/starship.component';
import {StarshipService} from './starship/starship.service';

import { PlanetComponent } from './planet/planet.component';
import {PlanetService} from './planet/planet.service';
import { PlanetShowoffComponent } from './planet/planetShowoff/planetShowoff.component';
// import {PlanetEffects} from './planet/planet.effects';

import { HttpModule }    from '@angular/http';
import { RouterModule }   from '@angular/router';
import { AppRoutingModule }     from './app-routing.module';

import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

import {PlanetReducer} from './planet/planet.reducer';
import {PeopleReducer} from './people/people.reducer';
import {StarshipReducer} from './starship/starship.reducer';

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    PlanetComponent,
    PlanetShowoffComponent,
    StarshipComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    StoreModule.provideStore(
      {
        PlanetReducer:PlanetReducer, 
        PeopleReducer: PeopleReducer,
        StarshipReducer: StarshipReducer
      })
    // ,
    // EffectsModule.run(PlanetEffects)
  ],
  providers: [PeopleService, PlanetService, StarshipService],
  bootstrap: [AppComponent]
})
export class AppModule { }
