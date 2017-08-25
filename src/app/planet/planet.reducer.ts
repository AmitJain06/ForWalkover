import { NgModule } from '@angular/core';
import { ActionReducer, Action} from '@ngrx/store';
import { PlanetActions } from './planet.action';

export const PlanetReducer: ActionReducer<any[]> =
    (state : any[] = [], action: Action) => {
        switch (action.type) {
            case PlanetActions.FETCH_PLANET_LIST:
                return  action.payload;
        }
    }


