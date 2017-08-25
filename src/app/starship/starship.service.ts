import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class StarshipService {

    constructor(private http: Http) { }

    getStarship(): Promise<any> {
        return this.http.get("http://swapi.co/api/starships/")
            .toPromise()
            ;
    }


}


