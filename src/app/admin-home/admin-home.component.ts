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
  currentEng = null;
  constructor(private _ConnectorService: ConnectorService, private location: Location, private _route: ActivatedRoute, private _r: Router) {
    this._route.paramMap.subscribe(params => {
      this.currentEng_id = params.get('eng');
    });
    this._ConnectorService.user.subscribe(user => {
      console.log("admin-home: got the current user from connector service", user)
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
    this._ConnectorService.currentEng.subscribe(eng => {
      
      if(eng == null){
        console.log('no engamement!')
      }else if (eng){
        console.log("admin-home: got the current engagement from connector service", eng)
      }
      this.currentEng = eng;
    })
  }

  ngOnInit() {
    console.log("welcome to the admin portal")
    console.log("admin-home: current user =>", this.currentUser)
    console.log("admin-home: current engagement =>", this.currentEng)
  }
  test(){
    console.log("currentEng_id =>", this.currentEng_id, "; currentUser =>", this.currentUser)
  }

}
