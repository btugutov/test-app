import { Component, OnInit } from '@angular/core';
import { ConnectorService } from './../connector.service'
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  user;
  constructor(private _c: ConnectorService) { 
    this._c.user.subscribe(user => {
    if(user && user['displayName']){
      console.log('we got user!! =>', user)
      this.user = user;
    }
  })}

  ngOnInit() {
    if(!this.user){
      console.log("tupeof(user) =>", typeof(this.user))
      if(localStorage['user']){
        this.user = JSON.parse(localStorage['user'])
      }
    }else{

    }
  }

}
