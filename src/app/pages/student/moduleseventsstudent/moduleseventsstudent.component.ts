import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { EventSettingsModel, PopupOpenEventArgs, ScheduleComponent, TimeScaleModel, View } from '@syncfusion/ej2-angular-schedule';
import { CrudService } from 'src/app/services/crud.service';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

interface eventDB{
  Id: number;
  Subject: string;
  StartTime: Date;
  EndTime: Date;
  Place: string;
  nameProf: string;
  lastNameProf: string;
}

interface eventToShow{
  Id: number;
  Subject: string;
  StartTime: Date;
  EndTime: Date;
  Description: string;
  Location: string;
  IsAllDay: boolean;
}

@Component({
  selector: 'app-moduleseventsstudent',
  templateUrl: './moduleseventsstudent.component.html',
  styleUrls: ['./moduleseventsstudent.component.scss']
})
export class ModuleseventsstudentComponent implements OnInit, OnDestroy {
  @ViewChild("scheduleObj")
  public scheduleObj: ScheduleComponent;

  isReadOnly: boolean = false;

  events: Object[] = [];
  eventSettings: EventSettingsModel = {
    dataSource: [],
  };
  public timeScale: TimeScaleModel = { enable: true, interval: 60, slotCount: 6 };
  public scheduleViews: View[] = ['Month'];
  public selectionTarget: Element;
  
  public faPencilAlt = faPencilAlt;


  constructor(
    private crudService: CrudService,
  ) {
    this.getAllEvents()
    
  }

  public onPopupOpen(args: PopupOpenEventArgs): void {
    this.selectionTarget = args.target;
  }

  getAllEvents(): void{
    let id = sessionStorage.getItem("idModule")
    this.crudService.getEventsModule(id).subscribe( (data: eventDB[]) => {
      data.forEach(event => {
        let e: eventToShow = {
          Id: event.Id,
          Subject: event.Subject,
          StartTime: new Date(event.StartTime),
          EndTime: new Date(event.EndTime),
          Description: "Profesor: "+event.nameProf+" "+event.lastNameProf,
          Location: event.Place,
          IsAllDay: false}
        this.scheduleObj.addEvent(e);
      });
      this.isReadOnly = true;
    })
  }

  registerEvent(args: any): void{
    // Abrir dialog para saber si quiere realmente guardar dicho evento
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    sessionStorage.removeItem("idModule");
  }
}
