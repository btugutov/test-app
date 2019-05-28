import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private _route: ActivatedRoute) { 
    this._route.paramMap.subscribe(params => {
      console.log("params.get('display_name') =>", params.get('display_name'))
    })
    console.log("AUTH IS HERE!")
  }

  ngOnInit() {
    console.log("SUP")
  }

}
