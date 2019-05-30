import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ConnectorService } from '../connector.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-admin-grade',
  templateUrl: './admin-grade.component.html',
  styleUrls: ['./admin-grade.component.css']
})
export class AdminGradeComponent implements OnInit {
  currentEng_id;
  target;
  action;
  currentUser;
  quiz;
  quiz_name;
  quiz_names;
  submit_id;
  constructor(private _ConnectorService: ConnectorService, private location: Location, private _route: ActivatedRoute, private _r: Router) {
    // this._ConnectorService.quizz_names.subscribe(quiz_names => {
    //   this.quiz_names = quiz_names;
    // })
    this._route.paramMap.subscribe(params => {
      this.currentEng_id = params.get('eng');
      this.target = params.get('target_id');
      this.action = params.get('action');
      this._ConnectorService.user.subscribe(user => {
        this.currentUser = user;
        if (user && (!user.admin_grader && !user.admin_owner)) {
          this._r.navigate([`/${this.currentEng_id}/home`]);
        }
        if (user && user.profile_id ) {
          if(this.action == 'grade'){
            this._ConnectorService.getQuizForGrading(this.currentUser.email, this.target).then(res => {
              if(res['status'] == 'success'){
                this.quiz = res['quiz']
                console.log("RESPONSE =>", res)
                this.quiz_name = res['quiz_name']['quiz_name']
                this.submit_id = res['submit_id']
              }else{
                console.log("error!")
                console.log(res)
              }
            }).catch(function(error){
              console.log(error)
            })
          }
        }
      })
    })


  }

  ngOnInit() {
  }

}
