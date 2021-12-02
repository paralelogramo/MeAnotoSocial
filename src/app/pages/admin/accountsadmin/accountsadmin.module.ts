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
import { ShowuserdialogComponent } from './showuserdialog/showuserdialog.component';

@NgModule({
  declarations: [
    AccountsadminComponent,
    AdduserdialogComponent,
    ShowuserdialogComponent,
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
  ],
  exports:[
  ]
})
export class AccountsadminModule { }
