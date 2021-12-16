import { Component, OnInit, ViewChild } from '@angular/core';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { EventSettingsModel, PopupOpenEventArgs, ScheduleComponent, TimeScaleModel, View } from '@syncfusion/ej2-angular-schedule';

@Component({
  selector: 'app-detailmoduleprofessor',
  templateUrl: './detailmoduleprofessor.component.html',
  styleUrls: ['./detailmoduleprofessor.component.scss']
})
export class DetailmoduleprofessorComponent implements OnInit {
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


  constructor() { }

  ngOnInit(): void {
  }

  openDialog(args: any): any {
    // const dialog = this.dialog.open(AddeventdialogComponent)
    // dialog.afterClosed().subscribe(res => {
    //   if(res.event == "Yes"){
    //     var e = this.scheduleObj.getEventDetails(this.selectionTarget!)
    //     var ids = {
    //       refUser: localStorage.getItem('id'),
    //       refEvent: e.Id,
    //     }
    //     this.crudService.inscriptionEventStudent(ids).subscribe(data => {
    //       if(!Object.values(data)[0]){
    //         this.snackBar.open('Ups! Parece que ya te has inscrito en este evento', undefined , {
    //           duration: 4000,
    //         })
    //       }
    //       else{
    //         this.snackBar.open('Evento registrado con exito!\nPuedes verlo en la pestaña "Mis Eventos"', undefined , {
    //           duration: 4000,
    //         })
    //       }
    //     })
    //   }
    // })
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

  
}
