import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class PeopleService {

    constructor(private http: Http) { }

    getPeople(): Promise<any> {
        return this.http.get("http://swapi.co/api/people/")
            .toPromise()
            ;
    }


}


