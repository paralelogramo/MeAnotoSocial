import { Component, OnInit, ViewChild } from '@angular/core';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { EventSettingsModel, PopupOpenEventArgs, ScheduleComponent, TimeScaleModel, View } from '@syncfusion/ej2-angular-schedule';
import { CrudService } from 'src/app/services/crud.service';

interface eventDB{
  Id: number;
  Subject: string;
  StartTime: Date;
  EndTime: Date;
  Place: string;
  nameProf: string;
  lastNameProf: string;
  Category: string;
}

interface eventToShow{
  Id: number;
  Subject: string;
  StartTime: Date;
  EndTime: Date;
  Description: string;
  Location: string;
  IsAllDay: boolean;
  Category: string;
}
@Component({
  selector: 'app-eventsprofessor',
  templateUrl: './eventsprofessor.component.html',
  styleUrls: ['./eventsprofessor.component.scss']
})
export class EventsprofessorComponent implements OnInit {

  @ViewChild("scheduleObj")
  public scheduleObj: ScheduleComponent;
  public eventAdded: boolean = false; 
  isReadOnly: boolean = false;
  public scheduleViews: View[] = ['Month'];
  public selectionTarget: Element | undefined;
  public timeScale: TimeScaleModel = { enable: true, interval: 60, slotCount: 6 };
  eventSettings: EventSettingsModel = {
    dataSource: [],
  };

  public faPencilAlt = faPencilAlt;

  constructor(
    private crudService: CrudService,
  ) {
    this.getAllEvents();
  }

  ngOnInit(): void {
  }

  public onPopupOpen(args: PopupOpenEventArgs): void {
    this.selectionTarget = args.target;
    console.log(this.selectionTarget)
  }

  OnEventRendered(args: any){
    var categoryColor = ""
    if(args.data.Category == "Proximamente"){
      categoryColor = 'green'
    }
    else{
      categoryColor = 'red'
    }
    args.element.style.backgroundColor = categoryColor
  }

  onClick(args: any) { 
    if (!this.eventAdded) { 
      let popupInstance = (document.querySelector(".e-quick-popup-wrapper") as any).ej2_instances[0]; 
      popupInstance.open = () => { 
        popupInstance.refreshPosition(); 
      }; 
      this.eventAdded = true; 
    } 
  } 

  getAllEvents(): void{
    let id = localStorage.getItem("id")
    this.crudService.getAllEventsProfessor(id!).subscribe( (data: any[]) => {
      data.forEach(event => {
          let e: eventToShow = {
            Id: event.Id,
            Subject: event.Subject,
            StartTime: new Date(event.StartTime),
            EndTime: new Date(event.EndTime),
            Description: event.Description,
            Location: event.Place,
            IsAllDay: false,
            Category: event.Category,
          }
          this.scheduleObj.addEvent(e);
      });
      this.isReadOnly = true;
    })
  }

  openDialog(args: any): any {
    console.log("args: ",args)
  }

}
