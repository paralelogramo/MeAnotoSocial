import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from 'src/app/consts/routes';
import { User } from 'src/app/models/User';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-userpopup',
  templateUrl: './userpopup.component.html',
  styleUrls: ['./userpopup.component.scss']
})
export class UserpopupComponent  {

  public routes: typeof routes = routes;
  public user: User = new User(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined);

  constructor(
    private crudService: CrudService,
    private router: Router,
  ){
    this.getCurrentUser();
  }

  public async getCurrentUser(){
    let id = localStorage.getItem('id')
    this.crudService.getUserById(id).subscribe(data => {
      this.user = data
    })
  }

  public signOut(){
    localStorage.removeItem('id')
    this.router.navigate([this.routes.LOGIN]);
  }
}
