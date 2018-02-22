import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';

import {DashboardComponent} from './dashboard/dashboard.component';
import {NewsComponent} from './news/news.component';

const routesForEvent: Routes = [
    {path: 'dashboard', component:DashboardComponent},
    {path: 'news', component: NewsComponent},
    {path: '', component: DashboardComponent},
    {path: '**', component: DashboardComponent}
  ]; 

  @NgModule({
      imports:[
        RouterModule.forRoot(routesForEvent)
      ], 
      exports:[
          RouterModule
      ]
  })
  export class AppRoutingModule{}