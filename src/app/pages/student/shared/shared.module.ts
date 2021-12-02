import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LayoutComponent } from './layout/layout.component';
import { UserpopupComponent } from './header/userpopup/userpopup.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DashboardstudentModule } from '../dashboardstudent/dashboardstudent.module';
import { ModulesstudentModule } from '../modulesstudent/modulesstudent.module';
import { EventsstudentModule } from '../eventsstudent/eventsstudent.module';

@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    RouterModule,
    MatButtonModule,
    MatMenuModule,
    MatDialogModule,
    MatSelectModule,
    FormsModule,
    MatSidenavModule,
    MatToolbarModule,
  ],
  declarations: [
    HeaderComponent,
    SidebarComponent,
    LayoutComponent,
    UserpopupComponent
  ],
  exports:[
    HeaderComponent,
    SidebarComponent,
    LayoutComponent
  ]
})
export class SharedModule { }
