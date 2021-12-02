import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { DashboardadminModule } from '../dashboardadmin/dashboardadmin.module';
import { AccountsadminModule } from '../accountsadmin/accountsadmin.module';
import { DependenciesadminModule } from '../dependenciesadmin/dependenciesadmin.module';
import { ModulesadminModule } from '../modulesadmin/modulesadmin.module';
import { LayoutComponent } from './layout/layout.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UserpopupComponent } from './header/userpopup/userpopup.component';
import { MatDialogModule } from '@angular/material/dialog';



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
    SidebarComponent,
    HeaderComponent,
    LayoutComponent,
    UserpopupComponent,
  ],
  exports: [
    SidebarComponent,
    HeaderComponent,
    LayoutComponent,
  ]
})
export class SharedModule { }
