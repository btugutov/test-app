import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthComponent} from './auth/auth.component'
import {ConnectorComponent} from './connector/connector.component';
import { NotFoundComponent} from './not-found/not-found.component';
import { AdminCreatequizComponent } from './admin-createquiz/admin-createquiz.component';
import { AdminEditengagementsComponent } from './admin-editengagements/admin-editengagements.component';
import { AdminEditpermissionsComponent } from './admin-editpermissions/admin-editpermissions.component';
import { AdminEditquizComponent } from './admin-editquiz/admin-editquiz.component';
import { AdminEditsubmissionsComponent } from './admin-editsubmissions/admin-editsubmissions.component';
import { AdminEditusersComponent } from './admin-editusers/admin-editusers.component';
import { AdminGradeComponent } from './admin-grade/admin-grade.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminHomeEditComponent } from './admin-home-edit/admin-home-edit.component';
import { AdminHomeGradeComponent } from './admin-home-grade/admin-home-grade.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { OopsComponent } from './oops/oops.component';
import { QuizComponent } from './quiz/quiz.component';
import { UserComponent } from './user/user.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'register', component: RegisterComponent },
  { path: ':eng/home', component: HomeComponent },
  { path: ':eng/topic/:topic_id/user/:email/quiz/:quiz_id/question/:question_num', component: QuizComponent },
  { path: 'user/:id', component: UserComponent },
  { path: ':eng/admin', component: AdminHomeComponent },
  { path: ':eng/adminhomegrade', component: AdminHomeGradeComponent },
  { path: ':eng/adminhomeedit', component: AdminHomeEditComponent },
  { path: ':eng/admincreatequiz', component: AdminCreatequizComponent },
  { path: ':eng/AdminEditengagements', component: AdminEditengagementsComponent },
  { path: ':eng/AdminEditpermissions', component: AdminEditpermissionsComponent },
  { path: ':eng/AdminEditquiz/:topicID', component: AdminEditquizComponent },
  { path: ':eng/AdminEditsubmissions', component: AdminEditsubmissionsComponent },
  { path: ':eng/AdminEditusersComponent', component: AdminEditusersComponent},
  { path: ':eng/grade/:target_id/:action', component: AdminGradeComponent},
  { path: 'auth/login/aad/callback', component: AuthComponent},
  { path: 'oops', component: OopsComponent},

  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
