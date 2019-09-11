import { Component, OnInit } from '@angular/core';
import { ConnectorService } from '../connector.service';
@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit {
  currentEng; 
  constructor(private _ConnectorService: ConnectorService) { 
    this._ConnectorService.currentEng.subscribe(currentEng => {
      if(currentEng){
        this.currentEng = currentEng;
      }
    })
  }

  ngOnInit() {
  }

}
