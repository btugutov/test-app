import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ConnectorService } from '../connector.service';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';

const { format_quiz_table, unescapingObj, groupBy, groupByKey, categoriesFixer, switchKey, joinUsersByTopicId, removeSpacesFromStr, gradeValidate, findAnswerID, infoValidate, escapeObject, escapingQuiz, sortOnKeys, topicListNameRemoveSpaces, reAssignSession, questionRenderOderAnswers, filterEngagementsByAvailableQuizzes } = require('../object_validation.js');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ready_bool = false;
  cats_n_tops;
  currentUser = null;
  currentEng = null;
  engagements = null;
  currentEng_id = null;
  cats_n_tops_array = [];
  cats_n_tops_bool;

  constructor(private _ConnectorService: ConnectorService, private location: Location, private _route: ActivatedRoute) { 
    this._route.paramMap.subscribe(params => {
      this.currentEng_id = params.get('eng');
    })
    this._ConnectorService.user.subscribe(user => {
      this.currentUser = user;
      if(user){
        this.getAllCategoriesAndTopicsByProfileId(user.profile_id)
      }
    });
    this._ConnectorService.engagements.subscribe(engs => {
      this.engagements = engs;
      this.changeCurEng();
    });
  }

  ngOnInit() {
  }
  changeCurEng(){
    for(let el in this.engagements){
      if(this.engagements[el]['engagement_id'] == this.currentEng_id){
        let obj ={
          currentEng: this.engagements[el]
        }
        this._ConnectorService.setMainInfo(obj)
      }
    }
  }
  getAllCategoriesAndTopicsByProfileId(profile_id){
    this._ConnectorService.getAllCategoriesAndTopicsByProfileId(profile_id).then(data =>{
      console.log("getAllCategoriesAndTopicsByProfileId DATA =>", data)
      this.cats_n_tops = []
      for(let el in data){
        if(data[el]['engagement_id'] == this.currentEng_id){
          data[el]['link'] = `/${this.currentEng_id}/topic/${data[el]['topic_id']}/user/${this.currentUser.email}/quiz/1/question/1`;
          if(data[el]['topic_status']==1){
            data[el]['class'] = `btn btn-outline-danger btn-lg`;
          }else if(data[el]['topic_status']==2){
            data[el]['class'] = `btn btn-outline-success btn-lg`;
          }else{
            data[el]['class'] = `btn btn-outline-secondary btn-lg`;
          }

          this.cats_n_tops.push(data[el])
        }
      }
      if(Object.keys(this.cats_n_tops).length<1){
        this.cats_n_tops_bool = false;
        this.ready_bool = true;
        return;
      }else{
        this.cats_n_tops_bool = true;
      }
      this.cats_n_tops = groupByKey(unescapingObj(this.cats_n_tops), 'category', 'topic_id')
      for(let c in this.cats_n_tops){
        this.cats_n_tops_array[c] = [];
        for(let t in this.cats_n_tops[c]){
          this.cats_n_tops_array[c].push(this.cats_n_tops[c][t])
        }
      }
      console.log(this.cats_n_tops_array)
      this.ready_bool = true;
    }).catch(function(error) {
    });
  }
}
