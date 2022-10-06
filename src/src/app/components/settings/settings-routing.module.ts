import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingListComponent } from './setting-list/setting-list.component';
import { SettingsComponent } from './settings.component';

const routes: Routes = [
  {
    path: 'tipo',
    component: SettingsComponent
  },
  {
    path: 'severidad',
    component: SettingListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
