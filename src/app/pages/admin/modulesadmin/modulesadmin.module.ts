import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulesadminComponent } from './modulesadmin.component';
import { ModulestableComponent } from './modulestable/modulestable.component';
import { AddmoduledialogComponent } from './addmoduledialog/addmoduledialog.component';
import { SharedModule } from '../shared/shared.module';
import { ModulesadminRoutingModule } from './modulesadmin-routing.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    ModulesadminComponent,
    ModulestableComponent,
    AddmoduledialogComponent
  ],
  imports: [
    CommonModule,
    ModulesadminRoutingModule,
    SharedModule,
    MatPaginatorModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatMenuModule,
    MatButtonModule,
  ]
})
export class ModulesadminModule { }
