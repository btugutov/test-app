import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BehaviorSubject, ObservableInput } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
@Injectable({
  providedIn: 'root'
})
export class ConnectorService {
  private cur_user = new BehaviorSubject(null);
  user = this.cur_user.asObservable();

  private curEng = new BehaviorSubject(null);
  currentEng = this.curEng.asObservable();

  private engs = new BehaviorSubject(null);
  engagements = this.engs.asObservable();

  private quizzes = new BehaviorSubject(null);
  quizz_names = this.quizzes.asObservable();

  private message = new BehaviorSubject(null);
  pop_up_message = this.message.asObservable();

  constructor(private http: HttpClient) {

  }

  storeUser(user) {
    // console.log("storeUser(user): user =>", user)
    if (!user) {
      return false;
    }
    var that = this;
    return new Promise(function (resolve, reject) {
      that.http.post('/api/store_user', user).subscribe(
        res => {
          that.getAvailableEngagements(res['profile_id']).then(engs => {
            // console.log("===========engs =>", engs)
            res['engs'] = engs;
            that.engs.next(that.objToToArray(engs));
            that.cur_user.next(res);
            resolve(res)
          })
        },
        err => {
          reject(err)
        }
      );
    })
  }
  get_User(email) {
    email = {
      'email': email
    }
    var that = this;
    return new Promise(function (resolve, reject) {
      that.http.post('/api/get_User', email).subscribe(
        res => {
          // console.log("RES =>", res)
          resolve(res)
        },
        err => {
          // console.log("ERROR =>", err)
          reject(err)
        }
      );
    })
    // console.log("done")
  }
  // ENGAGEMENT FUNCTIONS =========================================================
  getAvailableEngagements(profile_id) {
    var that = this;
    profile_id = {
      'profile_id': profile_id
    }
    return new Promise(function (resolve, reject) {
      that.http.post('/api/get_availableEngagements', profile_id).subscribe(
        res => {
          resolve(res)
        },
        err => {
          reject(err)
        }
      );
    })
  };
  // ==============================================================================

  // QUIZ FUNCTIONS ===============================================================
  takeQuiz(eng, email, topic_id, quiz_id) {
    let that = this;
    return new Promise(function (resolve, reject) {
      that.http.get(`/api/${eng}/topic/${topic_id}/user/${email}/quiz/${quiz_id}/question/1`).subscribe( // /3/topic/5/user/Bazyr-Tugutovs-Macbook-Pro.local/quiz/1/question/1
        res => {
          resolve(res)
        },
        err => {
          reject(err)
        }
      );
    })
  }

  submitAnswer(eng_id, answer) {
    let that = this;
    return new Promise(function (resolve, reject) {
      that.http.post(`/api/${eng_id}/success`, answer).subscribe( // /3/topic/5/user/Bazyr-Tugutovs-Macbook-Pro.local/quiz/1/question/1
        res => {
          resolve(res)
        },
        err => {
          reject(err)
        }
      );
    })
  }
  // ==============================================================================

  // CATEGORIES FUNCTIONS =========================================================
  getAllCategoriesAndTopicsByProfileId(profile_id) {
    var that = this;
    return new Promise(function (resolve, reject) {
      let obj = {
        'profile_id': profile_id
      }
      that.http.post('/api/getAllCategoriesAndTopicsByProfileId', obj).subscribe(
        res => {
          resolve(res)
        },
        err => {
          reject(err)
        }
      );
    })
  }
  // ==============================================================================

  // GRADING FUNCTIONS ============================================================
  getCompletedQuizzesLength(profile_id, eng_id) {
    var that = this;
    return new Promise(function (resolve, reject) {
      let obj = {
        'profile_id': profile_id,
        'eng_id': eng_id
      }
      that.http.post('/api/getCompletedQuizzesLength', obj).subscribe(
        res => {
          resolve(res)
        },
        err => {
          reject(err)
        }
      );
    })
  }

  getCompletedQuizzes(profile_id, eng_id) {
    var that = this;
    return new Promise(function (resolve, reject) {
      let obj = {
        'profile_id': profile_id,
        'eng_id': eng_id
      }
      that.http.post('/api/getCompletedQuizzes', obj).subscribe(
        res => {
          resolve(res)
        },
        err => {
          reject(err)
        }
      );
    })
  }

  releaseSubmittedQuiz(submit_id, topic_id, email) {
    var that = this;
    return new Promise(function (resolve, reject) {
      let obj = {
        'submit_id': submit_id,
        'topic_id': topic_id,
        'email': email
      }
      that.http.post('/api/releaseSubmittedQuiz', obj).subscribe(
        res => {
          resolve(res)
        },
        err => {
          reject(err)
        }
      );
    })
  }
  releaseAllSubmittedQuiz(ids, email) {
    var that = this;
    return new Promise(function (resolve, reject) {
      let obj = {
        'ids': ids,
        'email': email
      }
      that.http.post('/api/releaseAllSubmittedQuiz', obj).subscribe(
        res => {
          resolve(res)
        },
        err => {
          reject(err)
        }
      );
    })
  }
  getQuizForGrading(email, topic_id) {
    var that = this;
    return new Promise(function (resolve, reject) {
      let obj = {
        'email': email,
        'topic_id': topic_id
      }
      that.http.post('/api/getQuizForGrading', obj).subscribe(
        res => {
          resolve(res)
        },
        err => {
          reject(err)
        }
      );
    })
  }
  continueGradeQuiz(email, submit_id) {
    var that = this;
    return new Promise(function (resolve, reject) {
      let obj = {
        'submit_id': submit_id,
        'email': email
      }
      that.http.post('/api/continue_grade', obj).subscribe(
        res => {
          resolve(res)
        },
        err => {
          reject(err)
        }
      );
    })
  }

  submitGrades(grades, email) {
    var that = this;
    return new Promise(function (resolve, reject) {
      let obj = {
        'grades': grades,
        'email': email
      }
      that.http.post('/api/submitGrades', obj).subscribe(
        res => {
          resolve(res)
        },
        err => {
          reject(err)
        }
      );
    })
  }
  // ==============================================================================
  // CREATE QUIZ FUNCTIONS ========================================================

  getCatsTopsEngs(email) {
    var that = this;
    return new Promise(function (resolve, reject) {
      let obj = {
        'email': email
      }
      that.http.post('/api/getCatsTopsEngs', obj).subscribe(
        res => {
          resolve(res)
        },
        err => {
          reject(err)
        }
      );
    })
  }

  createQuiz(quiz, email) {
    var that = this;
    return new Promise(function (resolve, reject) {
      let obj = {
        'email': email,
        'quiz': quiz
      }
      that.http.post('/api/createQuiz', obj).subscribe(
        res => {
          resolve(res)
        },
        err => {
          reject(err)
        }
      );
    })
  }

  // ==============================================================================

  // EDIT QUIZ FUNCTIONS ==========================================================
  getQuizzesForEdit(email, eng_id) {
    var that = this;
    return new Promise(function (resolve, reject) {
      let obj = {
        'email': email,
        'eng_id': eng_id
      }
      that.http.post('/api/getQuizzesForEdit', obj).subscribe(
        res => {
          resolve(res)
        },
        err => {
          reject(err)
        }
      );
    })
  }
  getQuizByTopicIdForEdit(email, topic_id) {
    var that = this;
    return new Promise(function (resolve, reject) {
      let obj = {
        'email': email,
        'topic_id': topic_id
      }
      that.http.post('/api/getQuizByTopicIdForEdit', obj).subscribe(
        res => {
          resolve(res)
        },
        err => {
          reject(err)
        }
      );
    })
  }
  saveEditedQuiz(quiz, email) {
    var that = this;
    return new Promise(function (resolve, reject) {
      let obj = {
        'email': email,
        'quiz': quiz
      }
      that.http.post('/api/saveEditedQuiz', obj).subscribe(
        res => {
          resolve(res)
        },
        err => {
          reject(err)
        }
      );
    })
  }
  deleteQuiz(quiz_id, email) {
    var that = this;
    return new Promise(function (resolve, reject) {
      let obj = {
        'email': email,
        'quiz_id': quiz_id
      }
      that.http.post('/api/deleteQuiz', obj).subscribe(
        res => {
          resolve(res)
        },
        err => {
          reject(err)
        }
      );
    })
  }


  // ==============================================================================

  // EDIT QUIZ PERMISSIONS FUNCTIONS ==============================================
  getQuizPermissions(obj){
    var that = this;
    return new Promise(function (resolve, reject) {
      that.http.post('/api/getQuizPermissions', obj).subscribe(
        res => {
          resolve(res)
        },
        err => {
          reject(err)
        }
      );
    })
  }
  saveQuizPermissions(users, email){
    let obj = {
        'users': users,
        'email': email
    }
    var that = this;
    return new Promise(function (resolve, reject) {
      that.http.post('/api/saveQuizPermissions', obj).subscribe(
        res => {
          resolve(res)
        },
        err => {
          reject(err)
        }
      );
    })
  }
  // ==============================================================================

  // EDIT QUIZ SUBMISSION FUNCTIONS ==============================================
  getQuizSubmissions(obj){
    var that = this;
    return new Promise(function (resolve, reject) {
      that.http.post('/api/getQuizSubmissions', obj).subscribe(
        res => {
          resolve(res)
        },
        err => {
          reject(err)
        }
      );
    })
  }
  saveQuizSubmissions(obj){
    var that = this;
    return new Promise(function (resolve, reject) {
      that.http.post('/api/saveQuizSubmissions', obj).subscribe(
        res => {
          resolve(res)
        },
        err => {
          reject(err)
        }
      );
    })
  }
  // ==============================================================================

  // MISC FUNCTIONS
  objToToArray(obj) { // object has to be a list
    let result = [];
    for (let el in obj) {
      result.push(obj[el])
    }
    return result
  };
  setMainInfo(obj) {
    if (obj.currentUser) {
      this.cur_user.next(obj.currentUser);
    }
    if (obj.currentEng) {
      this.curEng.next(obj.currentEng);
      // console.log('The curEng is updated =>', this.curEng)
    }
    if (obj.engagements) {
      this.engs.next(obj.engagements);
    }
    if (obj.quizzes) {
      this.quizzes.next(obj.quizzes);
    }
    if (obj.message) {
      this.message.next(obj.message);
    }
  }
  test() {
    var that = this;
    return new Promise(function (resolve, reject) {
      that.http.get('/api/test').subscribe(
        res => {
          resolve(res)
        },
        err => {
          reject(err)
        }
      );
    })
  }
  getOSInfo() {
    var that = this;
    return new Promise(function (resolve, reject) {
      that.http.get('/api/get_system_info_and_print_message').subscribe(
        res => {
          res['current_engagement'] = that.curEng.value;
          res['current_user'] = that.cur_user.value;
          res['all_engagements'] = that.engs.value;
          resolve(res)
        },
        err => {
          reject(err)
        }
      );
    })
  }
  imgToBase64(element) {
    return new Promise((resolve, reject) => {
      var file = element[0];
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }
}
