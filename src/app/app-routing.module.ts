import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './components/agregar/agregar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CoupensComponent } from './components/coupens/coupens.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MediaComponent } from './components/media/media.component';
import { PagesComponent } from './components/pages/pages.component';
import { SettingsComponent } from './components/settings/settings.component';
import { StatisticsComponent } from './components/statistics/statistics.component';

//Rutas de navegación
const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent },
  {path: 'login', component: LoginComponent },
  {path: 'agregar', component: AgregarComponent },
  {path: 'dashboard', component: DashboardComponent},
  {path: 'statistics', component: StatisticsComponent},
  {path: 'coupens', component: CoupensComponent},
  {path: 'pages', component: PagesComponent},
  {path: 'media', component: MediaComponent},
  {path: 'settings', component: SettingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
