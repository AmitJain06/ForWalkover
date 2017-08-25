import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class PlanetService {

    constructor(private http: Http) { }

    getPlanet(): Promise<any> {
        return this.http.get("http://swapi.co/api/planets/")
            .toPromise()
            ;
    }


}


