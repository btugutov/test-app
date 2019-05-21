import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthComponent} from './auth/auth.component'
import {ConnectorComponent} from './connector/connector.component';
import { NotFoundComponent} from './not-found/not-found.component';
const routes: Routes = [
  {path: '', component: ConnectorComponent},
  {path: '.auth/login/aad/callback', component: AuthComponent},

  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
