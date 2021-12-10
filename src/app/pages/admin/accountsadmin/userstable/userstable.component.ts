import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { User } from 'src/app/models/User';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';
import { AdduserdialogComponent } from '../adduserdialog/adduserdialog.component';
import { FormControl, FormGroup } from '@angular/forms';

const SIZE: number = 8;

@Component({
  selector: 'app-userstable',
  templateUrl: './userstable.component.html',
  styleUrls: ['./userstable.component.scss']
})
export class UsersTableComponent implements OnInit {
  typeAccount: string = "";
  page_size: number = SIZE;
  page_number: number = 1;
  page_size_options: number[] = [SIZE];
  pageEvent: PageEvent;

  displayedColumns: string[] = ['id','mainName', 'surName', 'email']
  
  users: User[] = [];
  allUsers: User[] = [];

  selectedUser: User = new User(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined);

  hoverPopUp: boolean;

  public options: FormGroup;
  public showMainName: String = '';
  public showSurName: String = '';
  public showNick: String = '';
  public showEmail: String = '';
  public showType: String = '';
  public showCareer: String = '';

  public disabledCareer: boolean;

  constructor(
    private crudService: CrudService,
    public dialog: MatDialog
  ) {
    this.getAllUsers();
    this.hoverPopUp = false;

    this.options = new FormGroup({
      nameControl : new FormControl(this.showMainName+" "+this.showSurName),
      nickControl : new FormControl(this.showNick),
      emailControl : new FormControl(this.showEmail),
      typeControl : new FormControl(this.showType),
      careerControl : new FormControl(this.showCareer),
    })
  }

  ngOnInit(): void {
  }

  getAllUsers(): any{
    this.crudService.getUserReduced().subscribe(data => {
      this.allUsers = data;
      this.users = this.allUsers.slice(0,this.page_size)
    })
  }  

  onPageChange(event: PageEvent): void{    
    this.users = this.allUsers.slice(event.pageIndex*event.pageSize,(event.pageIndex+1)*event.pageSize)
  }

  addUser(){
    const dialog = this.dialog.open(AdduserdialogComponent, {
      width: '350px'
    })
    dialog.afterClosed().subscribe(res => {
      this.getAllUsers();
    })
  }

  

  handleMouseOver(row: User): void{
    let typeString = "";
    let career = "";
    if(row.type == 0){
      typeString = "Administrador"
      career = "Sin Carrera"
      this.options.controls['careerControl'].disable()
    }
    if(row.type == 1){
      typeString = "Profesor"
      career = row.career!
      this.options.controls['careerControl'].enable()
    }
    if(row.type == 2){
      typeString = "Operativo"
      career = "Sin Carrera"
      this.options.controls['careerControl'].disable()
    }
    if(row.type == 3){
      typeString = "Estudiante"
      career = row.career!
      this.options.controls['careerControl'].enable()
    }
    this.options.setValue({
      nameControl: row.mainName+" "+row.surName,
      nickControl: row.nick,
      emailControl: row.email,
      typeControl: typeString,
      careerControl: career,
    })
  }

  handleMouseLeave(row: any): void{
  }

  enter(): void{
    this.hoverPopUp = true;
  }

  enternt(): void{
    this.hoverPopUp = false;
  }
}
