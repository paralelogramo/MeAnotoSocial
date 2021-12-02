import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountsadminComponent } from '../accountsadmin.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table'  
import { UsersTableComponent } from './userstable.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule
  ],
  declarations: [
    UsersTableComponent
  ],
  exports:[
    UsersTableComponent
  ]
})
export class UserTableModule { }
