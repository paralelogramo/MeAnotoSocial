import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

interface event{
  id: number;
  module: string;
  place: string;
  startTime: Date;
  endTime: Date;
  description: string;
  state: string;
}

@Component({
  selector: 'app-eventsstudent',
  templateUrl: './eventsstudent.component.html',
  styleUrls: ['./eventsstudent.component.scss']
})
export class EventsstudentComponent implements OnInit {

  events: event[] = []

  constructor(
    private crudService: CrudService,
  ) {
    this.getEventsUser()
  }

  ngOnInit(): void {
  }

  getEventsUser(): void{
    this.crudService.getEventsUser(localStorage.getItem("id")!).subscribe( data => {
      this.events = data
    })
  }

}
