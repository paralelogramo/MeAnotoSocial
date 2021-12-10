import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleseventsstudentComponent } from './moduleseventsstudent.component';
import { SharedModule } from '../shared/shared.module';
import { ModuleseventsstudentRoutingModule } from './moduleseventsstudent-routing.module';
import { RecurrenceEditorModule, ScheduleModule, DayService, WeekService, WorkWeekService, MonthService, MonthAgendaService } from '@syncfusion/ej2-angular-schedule';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatDialogModule } from '@angular/material/dialog';
import { AddeventdialogComponent } from './addeventdialog/addeventdialog.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    ModuleseventsstudentComponent,
    AddeventdialogComponent,
  ],
  imports: [
    CommonModule,
    ModuleseventsstudentRoutingModule,
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
export class ModuleseventsstudentModule { }
