import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthComponent} from './auth/auth.component'
import {ConnectorComponent} from './connector/connector.component';
import { NotFoundComponent} from './not-found/not-found.component';
import { MsAdalAngular6Module, AuthenticationGuard } from 'microsoft-adal-angular6';
const routes: Routes = [
  {path: '', component: ConnectorComponent},
  {path: 'auth', component: AuthComponent},
  // {path: ':other', component: AuthComponent},
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
