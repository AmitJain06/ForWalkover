import { Component, OnInit } from '@angular/core';
import {PlanetService} from './planet.service';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {PlanetActions} from './planet.action';

@Component({
    selector: 'planet',
    templateUrl: './planet.component.html'
    //   ,
    //   styleUrls: ['./heroes.component.css']
})
export class PlanetComponent implements OnInit {
    //0 show nothning
    // 1 show list
    // 2 show detail
    showTab: number;
    selectedPlanetName: any = '';
    selectedPlanet : any = null;
    planetList: any[];
    constructor(private planetService: PlanetService,
        private store: Store<any[]>) {
        this.showTab = 0;

        this.planetService.getPlanet()
            .then(response => {
                let list = JSON.parse(response._body).results;
                this.store.dispatch({
                    type: PlanetActions.FETCH_PLANET_LIST,
                    payload: list
                })
                
                this.store.select('PlanetReducer').subscribe((v) => {
                    this.planetList = v as any[];
                    console.log('this.planetList11: ', v);
                });
            });
    }

    ngOnInit() {
    }


    openList() {
        this.showTab = 1;
    }

     openListByID(){
        this.showTab = 2;
    }

    openDetail(event){
       
        let name = this.selectedPlanetName ;
        let thisPlanet = null;
        this.planetList.forEach(elem =>{
            if(elem.name == name){
                thisPlanet = elem;
            }
        });
        if(thisPlanet){
            this.selectedPlanet = thisPlanet;
        }
        else{
            this.selectedPlanet = null;
        }
         console.log('selectedPeople: ', this.selectedPlanet);
    }
}
