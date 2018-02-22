import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewsComponent } from './news/news.component';
import { AppRoutingModule } from './app-routing-module';
import { HomeComponent } from './home/home.component';
import { SpeedZonesComponent } from './speed-zones/speed-zones.component';
import { CountByZonesComponent } from './count-by-zones/count-by-zones.component';
import { SpeedAverageComponent } from './speed-average/speed-average.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
