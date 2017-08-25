import { NgModule } from '@angular/core';
import { ActionReducer, Action} from '@ngrx/store';
import { StarshipActions } from './starship.action';

export const StarshipReducer: ActionReducer<any[]> =
    (state : any[] = [], action: Action) => {
        switch (action.type) {
            case StarshipActions.FETCH_STARSHIP_LIST:
                return  action.payload;
        }
    }


