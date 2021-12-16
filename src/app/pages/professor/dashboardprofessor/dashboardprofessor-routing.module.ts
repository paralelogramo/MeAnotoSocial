import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardprofessorComponent } from './dashboardprofessor.component';



const routes: Routes = [
  {
    path: '',
    component: DashboardprofessorComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class DashboardprofessorRoutingModule {
}