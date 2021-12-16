import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulesprofessorComponent } from './modulesprofessor.component';
import { ModulecardComponent } from './modulecard/modulecard.component';
import { ModuleprofessorRoutingModule } from './modulesprofessor-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';



@NgModule({
  declarations: [
    ModulesprofessorComponent,
    ModulecardComponent
  ],
  imports: [
    CommonModule,
    ModuleprofessorRoutingModule,
    SharedModule,
    MatCardModule,
    MatGridListModule,    
    MatDividerModule,
    MatButtonModule,
    MatBadgeModule
  ]
})
export class ModulesprofessorModule { }
