import { Component, OnInit } from '@angular/core';
import { ConnectorService } from '../connector.service';

@Component({
  selector: 'app-oops',
  templateUrl: './oops.component.html',
  styleUrls: ['./oops.component.css']
})
export class OopsComponent implements OnInit {

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
