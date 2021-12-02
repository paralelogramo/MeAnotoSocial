import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardstudentComponent } from './dashboardstudent.component';
import { DashboardstudentRoutingModule } from './dashboardstudent-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    DashboardstudentComponent
  ],
  imports: [
    CommonModule,
    DashboardstudentRoutingModule,
    SharedModule
  ]
})
export class DashboardstudentModule { }
