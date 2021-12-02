import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesstudentRoutingModule } from './modulesstudent-routing.module';
import { ModulesstudentComponent } from './modulesstudent.component';
import { SharedModule } from '../shared/shared.module';
import { ModulecardComponent } from './modulecard/modulecard.component';


@NgModule({
  declarations: [
    ModulesstudentComponent,
    ModulecardComponent
  ],
  imports: [
    CommonModule,
    ModulesstudentRoutingModule,
    SharedModule
  ]
})
export class ModulesstudentModule { }
