import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardadminComponent } from './dashboardadmin.component';



const routes: Routes = [
  {
    path: '',
    component: DashboardadminComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class DashboardadminRoutingModule {
}
