import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardprofessorComponent } from './dashboardprofessor.component';
import { DashboardprofessorRoutingModule } from './dashboardprofessor-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    DashboardprofessorComponent
  ],
  imports: [
    CommonModule,
    DashboardprofessorRoutingModule,
    SharedModule
  ],
  exports: [
    
  ]
})
export class DashboardprofessorModule { }
