import { Component, OnInit } from '@angular/core';
import { ConnectorService } from './../connector.service'
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  currentUser;
  engagements;
  constructor(private _c: ConnectorService) { 
    this._c.user.subscribe(user => this.currentUser = user);
    this._c.engagements.subscribe(engs => this.engagements = engs);
  }
  // getAvailableEngagements(profile_id){
  //   this._c.getAvailableEngagements(profile_id).then(data =>{
  //     this.engagements = this.objToToArray(data);
  //     let obj = {
  //       'currentUser':this.user,
  //       'engagements': this.engagements,
  //     }
  //     console.log("OBJ =>",obj)
  //     this._c.setMainInfo(obj)
  //   }).catch(function(error) {
  //   });
  // }
  ngOnInit() {
    if(!this.currentUser){
      console.log("Seems like the Coonector")
      if(localStorage['user']){
        this.currentUser = JSON.parse(localStorage['user'])
      }
    }else{

    }
  }

}
