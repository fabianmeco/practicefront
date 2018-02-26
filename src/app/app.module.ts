import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartModule } from 'angular-highcharts'

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NewsComponent } from './components/news/news.component';
import { AppRoutingModule } from './app-routing-module';
import { HomeComponent } from './components/home/home.component';
import { SpeedZonesComponent } from './components/dashboard/speed-zones/speed-zones.component';
import { CountByZonesComponent } from './components/dashboard/count-by-zones/count-by-zones.component';
import { SpeedAverageComponent } from './components/dashboard/speed-average/speed-average.component';

import { FiledataService } from './filedata.service';

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
    ChartModule
  ],
  providers: [FiledataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
