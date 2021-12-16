import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { EventSettingsModel, PopupOpenEventArgs, ScheduleComponent, TimeScaleModel, View } from '@syncfusion/ej2-angular-schedule';
import { CrudService } from 'src/app/services/crud.service';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddeventdialogComponent } from './addeventdialog/addeventdialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

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

interface eventInscriptionDialog{
  refUser: number;
  refEvent: number;
}

@Component({
  selector: 'app-moduleseventsstudent',
  templateUrl: './moduleseventsstudent.component.html',
  styleUrls: ['./moduleseventsstudent.component.scss']
})
export class ModuleseventsstudentComponent implements OnInit, OnDestroy {
  @ViewChild("scheduleObj")
  public scheduleObj: ScheduleComponent;
  public eventAdded: boolean = false; 
  isReadOnly: boolean = false;

  events: Object[] = [];
  eventSettings: EventSettingsModel = {
    dataSource: [],
  };
  public timeScale: TimeScaleModel = { enable: true, interval: 60, slotCount: 6 };
  public scheduleViews: View[] = ['Month'];
  public selectionTarget: Element | undefined;
  
  public faPencilAlt = faPencilAlt;

  eventInscription: eventInscriptionDialog = {refUser: -1, refEvent: -1}

  constructor(
    private crudService: CrudService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {
    this.getAllEvents()
    
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    sessionStorage.removeItem("idModule");
  }

  openDialog(args: any): any {
    const dialog = this.dialog.open(AddeventdialogComponent)
    dialog.afterClosed().subscribe(res => {
      if(res.event == "Yes"){
        var e = this.scheduleObj.getEventDetails(this.selectionTarget!)
        var ids = {
          refUser: localStorage.getItem('id'),
          refEvent: e.Id,
        }
        this.crudService.inscriptionEventStudent(ids).subscribe(data => {
          if(!Object.values(data)[0]){
            this.snackBar.open('Ups! Parece que ya te has inscrito en este evento', undefined , {
              duration: 4000,
            })
          }
          else{
            this.snackBar.open('Evento registrado con exito!\nPuedes verlo en la pestaña "Mis Eventos"', undefined , {
              duration: 4000,
            })
          }
        })
      }
    })
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

  public onPopupOpen(args: PopupOpenEventArgs): void {
    this.selectionTarget = args.target;
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
          IsAllDay: false,
          Category: event.Category,
        }
        this.scheduleObj.addEvent(e);
      });
      this.isReadOnly = true;
    })
  }
}
