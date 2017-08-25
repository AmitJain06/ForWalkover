import { Component, OnInit } from '@angular/core';
import {PeopleService} from './people.service';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {PeopleActions} from './people.action';

@Component({
    selector: 'people',
    templateUrl: './people.component.html'
    //   ,
    //   styleUrls: ['./heroes.component.css']
})
export class PeopleComponent implements OnInit {
    //0 show nothning
    // 1 show list
    // 2 show detail
    showTab: number;
    peopleList: any[];
    selectedPeopleName: any = '';
    selectedPeople: any = null;
    constructor(private peopleService: PeopleService,
        private store: Store<any[]>) {
        this.showTab = 0;
        this.peopleService.getPeople()
            .then(response => {
                let list = JSON.parse(response._body).results;
                this.store.dispatch({
                    type: PeopleActions.FETCH_PEOPLE_LIST,
                    payload: list
                })

                this.store.select('PeopleReducer').subscribe((v) => {
                    this.peopleList = v as any[];
                    
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
       
        let name = this.selectedPeopleName ;
        let thisPeople = null;
        this.peopleList.forEach(elem =>{
            if(elem.name == name){
                thisPeople = elem;
            }
        });
        if(thisPeople){
            this.selectedPeople = thisPeople;
        }
        else{
            this.selectedPeople = null;
        }
         console.log('selectedPeople: ', this.selectedPeople);
    }
}
