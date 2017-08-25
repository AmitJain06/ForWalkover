import { NgModule } from '@angular/core';
import { ActionReducer, Action} from '@ngrx/store';
import { PeopleActions } from './people.action';

export const PeopleReducer: ActionReducer<any[]> =
    (state : any[] = [], action: Action) => {
        switch (action.type) {
            case PeopleActions.FETCH_PEOPLE_LIST:
                return  action.payload;
        }
    }


