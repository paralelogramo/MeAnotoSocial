import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsprofessorComponent } from './eventsprofessor.component';
import { EventsprofessorRoutingModule } from './eventsprofessor-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RecurrenceEditorModule, ScheduleModule, DayService, WeekService, WorkWeekService, MonthService, MonthAgendaService } from '@syncfusion/ej2-angular-schedule';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';



@NgModule({
  declarations: [
    EventsprofessorComponent
  ],
  imports: [
    CommonModule,
    EventsprofessorRoutingModule,
    SharedModule,
    ScheduleModule,
    RecurrenceEditorModule,
    MatButtonModule,
    MatIconModule,
    FontAwesomeModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  providers: [
    DayService,
    WeekService,
    WorkWeekService,
    MonthService,
    MonthAgendaService
  ]
})
export class EventsprofessorModule { }
