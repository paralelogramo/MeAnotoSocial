import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsstudentComponent } from './eventsstudent.component';
import { EventstudentRoutingModule } from './dashboardstudent-routing.module';
import { SharedModule } from '../shared/shared.module';
import { EventcardComponent } from './eventcard/eventcard.component';



@NgModule({
  declarations: [
    EventsstudentComponent,
    EventcardComponent
  ],
  imports: [
    CommonModule,
    EventstudentRoutingModule,
    SharedModule
  ]
})
export class EventsstudentModule { }
