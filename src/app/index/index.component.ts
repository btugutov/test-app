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
    this._c.engagements.subscribe(engs => {
        this.engagements = engs;
        console.log(engs)
      });
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
    console.log("current user at index.comp =>", this.currentUser)
    if(!this.currentUser){
      // console.log("Seems like the Coonector")
      if(localStorage['user']){
        let user = JSON.parse(localStorage['user'])
        // console.log("user to store =>", user)
        // this._c.storeUser(user).then(res => {
        //   this.currentUser = res;
        // }).catch(function(error){
        //   console.log("error =>", error)
        // })
        console.log(this.engagements)
      }
    }else{

    }
  }

}
