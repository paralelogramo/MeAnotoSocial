import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesstudentRoutingModule } from './modulesstudent-routing.module';
import { ModulesstudentComponent } from './modulesstudent.component';
import { SharedModule } from '../shared/shared.module';
import { ModulecardComponent } from './modulecard/modulecard.component';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';


@NgModule({
  declarations: [
    ModulesstudentComponent,
    ModulecardComponent
  ],
  imports: [
    CommonModule,
    ModulesstudentRoutingModule,
    SharedModule,
    MatCardModule,
    MatGridListModule,    
    MatDividerModule,
    MatButtonModule,
    MatBadgeModule
  ]
})
export class ModulesstudentModule { }
