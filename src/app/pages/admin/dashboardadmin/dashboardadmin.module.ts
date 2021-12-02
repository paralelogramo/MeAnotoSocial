import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardadminComponent } from './dashboardadmin.component';
import { SharedModule } from '../shared/shared.module';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { DashboardadminRoutingModule } from './dashboardadmin-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardadminRoutingModule,
    SharedModule,
    MatMenuModule,
    MatPaginatorModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
  ],
  declarations: [
    DashboardadminComponent,
  ],
  exports: [
  ]
})
export class DashboardadminModule { }
