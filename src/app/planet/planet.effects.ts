import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {Store, Action} from '@ngrx/Store';

import {PlanetActions} from './planet.action';
import {PlanetService} from './planet.service';

@Injectable()
export class PlanetEffects{
    constructor( private actions$ : Actions,
                 private store : Store<any>,
                 private planetService : PlanetService){

    }

    // @Effect()
    // load: Observable<Action> = this.actions$
    //         .ofType(PlanetActions.FETCH_PLANET_LIST)
    //         .switchMap(action =>
    //             this.planetService.getPlanet()
    //                 .map(res => ({type : PlanetActions.FETCH_PLANET_LIST_SUCCESS, payload: res}))
    //         );

}