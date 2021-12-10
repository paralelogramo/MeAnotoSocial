import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsstudentComponent } from './eventsstudent.component';
import { EventstudentRoutingModule } from './eventsstudent-routing.module';
import { SharedModule } from '../shared/shared.module';
import { EventcardComponent } from './eventcard/eventcard.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [
    EventsstudentComponent,
    EventcardComponent
  ],
  imports: [
    CommonModule,
    EventstudentRoutingModule,
    SharedModule,
    MatTabsModule,
    MatGridListModule
  ]
})
export class EventsstudentModule { }
