import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from 'src/app/consts/routes';
import { User } from 'src/app/models/User';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() isMenuOpened: boolean;
  @Output() isShowSidebar = new EventEmitter<boolean>();

  public user: User;
  public routers: typeof routes = routes;

  constructor(
    private crudService: CrudService,
    private router: Router
  ) {
    this.getCurrentUser()
  }

  private getCurrentUser(){
    let id = localStorage.getItem('id')
    this.crudService.getUserById(id).subscribe(data => {
      this.user = data
    })
  }

  public openMenu(): void {
    this.isMenuOpened = !this.isMenuOpened;

    this.isShowSidebar.emit(this.isMenuOpened);
  }

  public signOut(): void {
    localStorage.removeItem('id')
    this.router.navigate([this.routers.LOGIN]);
  }
}
