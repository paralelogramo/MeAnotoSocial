import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventcard',
  templateUrl: './eventcard.component.html',
  styleUrls: ['./eventcard.component.scss']
})
export class EventcardComponent implements OnInit {
  @Input() event: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
