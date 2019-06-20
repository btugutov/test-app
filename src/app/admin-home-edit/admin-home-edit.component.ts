import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ConnectorService } from '../connector.service';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-home-edit',
  templateUrl: './admin-home-edit.component.html',
  styleUrls: ['./admin-home-edit.component.css']
})
export class AdminHomeEditComponent implements OnInit {
  quizzes = null; // all submitted (not graded yet) quizzes
  quizzes_counter = {};
  currentEng_id = null; // current engagement id
  currentUser = null;
  your_list = null; // list of your current grading quizzes
  your_list_length = 0;
  links = {};
  popup_message = null;
  constructor(private _ConnectorService: ConnectorService, private location: Location, private _route: ActivatedRoute, private _r: Router) {
    this._route.paramMap.subscribe(params => {
      this.currentEng_id = params.get('eng');
    });
    this._ConnectorService.pop_up_message.subscribe(message => {
      this.popup_message = message;
      if(message){
        this._ConnectorService.setMainInfo({'message': null})
      }
    });
    this._ConnectorService.user.subscribe(user => {
      this.currentUser = user;
      if (user && (!user.admin_grader && !user.admin_owner)) {
        this._r.navigate([`/${this.currentEng_id}/home`]);
      }
      if (user && user.profile_id) {
        this._ConnectorService.getQuizzesForEdit(this.currentUser['email'], this.currentEng_id).then(res => {
          // console.log("res => ", res)
          if(res['status'] == 'success'){
            this._ConnectorService.setMainInfo({"quizzes": res})
            for (let c in res) {
              for (let t in res[c]) {
                for (let el in res[c][t]) {
                  if (!this.links[res[c][t][el]['topic_id']]) {
                    this.links[res[c][t][el]['topic_id']] = {
                      'topic_link': '',
                      'topic_id': null
                    }
                  }
                  this.links[res[c][t][el]['topic_id']]['topic_link'] = `/${this.currentEng_id}/AdminEditquiz/${res[c][t][el]['topic_id']}`;
                  this.links[res[c][t][el]['topic_id']]['topic_id'] = res[c][t][el]['topic_id']
                }
              }
            }
            this.quizzes = res['categories'];
            console.log("RESPONSE =>", res)
            console.log("LINKS =<", this.links)
          }else if(res['status'] == 'fail'){
            console.log(res)
            alert(res['message'])
          }
        })
      }
    });
   }

  ngOnInit() {
  }

}
