import { Component } from '@angular/core';
import { ConnectorService } from './connector.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-app';
  constructor(private _c: ConnectorService){

  }
  getInfo(){
    this._c.test().then(res => {
      alert(res)
    })
  }
}

