import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ChartsModule} from 'ng2-charts/ng2-charts'

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NewsComponent } from './components/news/news.component';
import { AppRoutingModule } from './app-routing-module';
import { HomeComponent } from './components/home/home.component';
import { SpeedZonesComponent } from './components/speed-zones/speed-zones.component';
import { CountByZonesComponent } from './components/count-by-zones/count-by-zones.component';
import { SpeedAverageComponent } from './components/speed-average/speed-average.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NewsComponent,
    HomeComponent,
    SpeedZonesComponent,
    CountByZonesComponent,
    SpeedAverageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
