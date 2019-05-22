import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnectorComponent } from './connector/connector.component';
import {ConnectorService} from './connector.service';
import { AuthComponent } from './auth/auth.component';
import { NotFoundComponent } from './not-found/not-found.component'
import { MsAdalAngular6Module, AuthenticationGuard } from 'microsoft-adal-angular6';
@NgModule({
  declarations: [
    AppComponent,
    ConnectorComponent,
    AuthComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MsAdalAngular6Module.forRoot({
      tenant: '12e2dd65-5024-44c2-83b5-3ca21c04ef0e',
      clientId: '7b070d90-8ae5-46ca-859b-9c67facadc2b',
      redirectUri: window.location.origin,
      navigateToLoginRequestUrl: false,
      cacheLocation: 'localStorage',
      endpoints: {
        "https://localhost:3000/.auth/login/aad/callback": "object_response"
      },
      }),
      
  ],
  providers: [
    ConnectorService,
    AuthenticationGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

