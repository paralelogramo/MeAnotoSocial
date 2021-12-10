import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountsadminComponent } from './accountsadmin.component';
import { SharedModule } from '../shared/shared.module';
import { UserTableModule } from '../../admin/accountsadmin/userstable/usertable.module';
import { AccountsadminRoutingModule } from './accountsadmin-routing.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table' 
import { MatBadgeModule } from '@angular/material/badge';
import { AdduserdialogComponent } from './adduserdialog/adduserdialog.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AccountsadminComponent,
    AdduserdialogComponent,
  ],
  imports: [
    CommonModule,
    AccountsadminRoutingModule,
    SharedModule,
    UserTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatGridListModule,
    MatButtonModule,
    FontAwesomeModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatOptionModule,
    MatSelectModule
  ],
  exports:[
  ]
})
export class AccountsadminModule { }
