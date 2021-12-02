import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/consts/routes';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  public routes: typeof routes = routes;
  public isOpenUiElements = false;

  public openUiElements() {
    this.isOpenUiElements = !this.isOpenUiElements;
  }
}
