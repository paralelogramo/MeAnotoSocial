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
import { DashboardprofessorModule } from '../dashboardprofessor/dashboardprofessor.module';
import { DetailmoduleprofessorModule } from '../detailmoduleprofessor/detailmoduleprofessor.module';
import { EventsprofessorModule } from '../eventsprofessor/eventsprofessor.module';
import { ModulesprofessorModule } from '../modulesprofessor/modulesprofessor.module';

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
    LayoutComponent,
    SidebarComponent,
    UserpopupComponent
  ],
  exports:[
    HeaderComponent,
    SidebarComponent,
    LayoutComponent
  ]
})
export class SharedModule { }
