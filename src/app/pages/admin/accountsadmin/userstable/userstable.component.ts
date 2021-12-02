import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { User } from 'src/app/models/User';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';
import { AdduserdialogComponent } from '../adduserdialog/adduserdialog.component';
import { ShowuserdialogComponent } from '../showuserdialog/showuserdialog.component';

const SIZE: number = 10;

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

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private crudService: CrudService,
    public dialog: MatDialog
  ) {
    this.getAllUsers();
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
    const dialog = this.dialog.open(AdduserdialogComponent)
    dialog.afterClosed().subscribe(res => {
      this.getAllUsers();
    })
  }

  showUser(){
    const dialog = this.dialog.open(ShowuserdialogComponent)
    dialog.afterClosed().subscribe(res => {
      this.getAllUsers();
    })
  }
}
