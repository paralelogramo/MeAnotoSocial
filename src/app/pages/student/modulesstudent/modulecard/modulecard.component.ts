import { Component, Input, OnInit } from '@angular/core';

interface moduleToShow{
  name: string;
  section: string;
  career: string;
  professor: string;
  news: number;
}

@Component({
  selector: 'app-modulecard',
  templateUrl: './modulecard.component.html',
  styleUrls: ['./modulecard.component.scss']
})
export class ModulecardComponent implements OnInit {
  @Input() module: moduleToShow;
  

  constructor() {
    
  }

  ngOnInit(): void {
  }

}
