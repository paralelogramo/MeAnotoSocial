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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';



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
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatOptionModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule
  ]
})
export class DependenciesadminModule { }
