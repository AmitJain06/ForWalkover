import { Component, OnInit } from '@angular/core';
import {StarshipService} from './starship.service';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {StarshipActions} from './starship.action';

@Component({
    selector: 'starship',
    templateUrl: './starship.component.html'
    //   ,
    //   styleUrls: ['./heroes.component.css']
})
export class StarshipComponent implements OnInit {
    //0 show nothning
    // 1 show list
    // 2 show detail
    showTab: number;
    selectedStarshipName: any = '';
    selectedStarship : any = null;
    starshipList: any[];
    constructor(private starshipService: StarshipService,
        private store: Store<any[]>) {
        this.showTab = 0;

        this.starshipService.getStarship()
            .then(response => {
                let list = JSON.parse(response._body).results;
                this.store.dispatch({
                    type: StarshipActions.FETCH_STARSHIP_LIST,
                    payload: list
                })
                
                this.store.select('StarshipReducer').subscribe((v) => {
                    this.starshipList = v as any[];
                    console.log('this.starshipList: ', v);
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
       
        let name = this.selectedStarshipName ;
        let thisStarship = null;
        this.starshipList.forEach(elem =>{
            if(elem.name == name){
                thisStarship = elem;
            }
        });
        if(thisStarship){
            this.selectedStarship = thisStarship;
        }
        else{
            this.selectedStarship = null;
        }
         console.log('selectedPeople: ', this.selectedStarship);
    }
}
