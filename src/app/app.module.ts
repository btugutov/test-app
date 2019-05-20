import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnectorComponent } from './connector/connector.component';
import {ConnectorService} from './connector.service'

@NgModule({
  declarations: [
    AppComponent,
    ConnectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    ConnectorService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

