import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailmoduleprofessorComponent } from './detailmoduleprofessor.component';
import { DetailmoduleprofessorRoutingModule } from './detailmoduleprofessor-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MatTabsModule } from '@angular/material/tabs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DayService, MonthAgendaService, MonthService, ScheduleModule, WeekService, WorkWeekService } from '@syncfusion/ej2-angular-schedule';



@NgModule({
  declarations: [
    DetailmoduleprofessorComponent
  ],
  imports: [
    CommonModule,
    DetailmoduleprofessorRoutingModule,
    SharedModule,
    MatTabsModule,
    FontAwesomeModule,
    ScheduleModule,
  ],
  providers: [
    DayService,
    WeekService,
    WorkWeekService,
    MonthService,
    MonthAgendaService
  ]
})
export class DetailmoduleprofessorModule { }
