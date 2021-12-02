import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardstudentComponent } from './dashboardstudent.component';



const routes: Routes = [
  {
    path: '',
    component: DashboardstudentComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class DashboardstudentRoutingModule {
}
