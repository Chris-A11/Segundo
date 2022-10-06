import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AgregarComponent } from './components/agregar/agregar.component';
import { LoginComponent } from './components/login/login.component';
import { BodyComponent } from './components/body/body.component';
import { CoupensComponent } from './components/coupens/coupens.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MediaComponent } from './components/media/media.component';
import { PagesComponent } from './components/pages/pages.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { ComponentServiceTsComponent } from './components/servicios/component.service.ts.component';
import { SublevelMenuComponent } from './components/sidenav/sublevel-menu.component';

@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent, 
    AgregarComponent, 
    LoginComponent, 
    BodyComponent, 
    CoupensComponent, 
    DashboardComponent, 
    MediaComponent, 
    PagesComponent,
    SidenavComponent, 
    StatisticsComponent,  
    ComponentServiceTsComponent, 
    SublevelMenuComponent
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule,
    AppRoutingModule, 
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
