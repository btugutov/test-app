import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ConnectorService } from '../connector.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  currentEng_id = null;
  currentUser = null;
  gradings_counter = null;
  your_list = null;
  constructor(private _ConnectorService: ConnectorService, private location: Location, private _route: ActivatedRoute, private _r: Router) {
    this._route.paramMap.subscribe(params => {
      this.currentEng_id = params.get('eng');
    })
    this._ConnectorService.user.subscribe(user => {
      this.currentUser = user;
      if(user && !user.admin){
        this._r.navigate([`/${this.currentEng_id}/home`]);
      }
      this.gradings_counter = 0;
      if(user && user.profile_id){
        this._ConnectorService.getCompletedQuizzesLength(this.currentUser['profile_id'], this.currentEng_id).then(res => {
          this.gradings_counter = res;
        })
      }
    });
  }

  ngOnInit() {
  }
  test(){
    console.log("currentEng_id =>", this.currentEng_id, "; currentUser =>", this.currentUser)
  }

}
