import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {PlanetActions} from '../planet.action';

@Component({
    selector: 'planet-showoff',
    templateUrl: './planetShowoff.component.html'
    //   ,
    //   styleUrls: ['./heroes.component.css']
})
export class PlanetShowoffComponent implements OnInit {
    //0 show nothning
    // 1 show list
    // 2 show detail
    selectedPlanetName: any = '';
    selectedPlanet : any = null;
    showTab: number;
    planetList: any[];
    constructor(private store: Store<any[]>) {
        this.showTab = 0;
        this.store.select('PlanetReducer').subscribe((v) => {
            this.planetList = v as any[];
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
