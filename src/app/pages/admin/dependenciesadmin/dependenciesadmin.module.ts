import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DependenciesadminComponent } from './dependenciesadmin.component';
import { SharedModule } from '../shared/shared.module';
import { DependenciesadminRoutingModule } from './dependenciesadmin-routing.module';
import { AdddependenciedialogComponent } from './adddependenciedialog/adddependenciedialog.component';
import { DependenciestableComponent } from './dependenciestable/dependenciestable.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    DependenciesadminComponent,
    AdddependenciedialogComponent,
    DependenciestableComponent
  ],
  imports: [
    CommonModule,
    DependenciesadminRoutingModule,
    SharedModule,
    MatPaginatorModule,
    MatTableModule,
    MatCardModule,
    MatIconModule
  ]
})
export class DependenciesadminModule { }
