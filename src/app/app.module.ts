import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnectorComponent } from './connector/connector.component';
import {ConnectorService} from './connector.service';
import { AuthComponent } from './auth/auth.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AdminCreatequizComponent } from './admin-createquiz/admin-createquiz.component';
import { AdminEditengagementsComponent } from './admin-editengagements/admin-editengagements.component';
import { AdminEditpermissionsComponent } from './admin-editpermissions/admin-editpermissions.component';
import { AdminEditquizComponent } from './admin-editquiz/admin-editquiz.component';
import { AdminEditsubmissionsComponent } from './admin-editsubmissions/admin-editsubmissions.component';
import { AdminEditusersComponent } from './admin-editusers/admin-editusers.component';
import { AdminEditgradeComponent } from './admin-editgrade/admin-editgrade.component';
import { AdminGradeComponent } from './admin-grade/admin-grade.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminHomeEditComponent } from './admin-home-edit/admin-home-edit.component';
import { AdminHomeGradeComponent } from './admin-home-grade/admin-home-grade.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { OopsComponent } from './oops/oops.component';
import { QuizComponent } from './quiz/quiz.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component'
import { DynamicScriptLoaderServiceService } from './dynamic-script-loader-service.service';
@NgModule({
  declarations: [
    AppComponent,
    ConnectorComponent,
    AuthComponent,
    NotFoundComponent,
    AdminCreatequizComponent,
    AdminEditengagementsComponent,
    AdminEditpermissionsComponent,
    AdminEditquizComponent,
    AdminEditsubmissionsComponent,
    AdminEditusersComponent,
    AdminEditgradeComponent,
    AdminGradeComponent,
    AdminHomeComponent,
    AdminHomeEditComponent,
    AdminHomeGradeComponent,
    HomeComponent,
    IndexComponent,
    NotfoundComponent,
    OopsComponent,
    QuizComponent,
    RegisterComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    ConnectorService,
    DynamicScriptLoaderServiceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

