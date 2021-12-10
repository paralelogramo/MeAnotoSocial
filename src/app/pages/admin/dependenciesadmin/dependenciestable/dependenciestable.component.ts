import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Dependencie } from 'src/app/models/Dependencie';
import { CrudService } from 'src/app/services/crud.service';
import { AdddependenciedialogComponent } from '../adddependenciedialog/adddependenciedialog.component';

const SIZE: number = 8;

@Component({
  selector: 'app-dependenciestable',
  templateUrl: './dependenciestable.component.html',
  styleUrls: ['./dependenciestable.component.scss']
})
export class DependenciestableComponent implements OnInit {
  allDependencies: Dependencie[] = [];
  dataSource = new MatTableDataSource<Dependencie>();

  displayedColumns: string[] = ['id', 'name', 'capacity', 'location'];

  page_size: number = SIZE;
  page_number: number = 1;
  page_size_options: number[] = [SIZE];
  pageEvent: PageEvent;


  constructor(
    private crudService: CrudService,
    public dialog: MatDialog
  ) {
    this.getAllDependences()
  }

  ngOnInit(): void {
  }

  getAllDependences(): any{
    this.crudService.getAllDependences().subscribe((data) => {
      this.allDependencies = data;
      this.dataSource.data = this.allDependencies.slice(0,this.page_size)
    })
  }

  onPageChange(event: PageEvent): void{    
    this.dataSource.data = this.allDependencies.slice(event.pageIndex*event.pageSize,(event.pageIndex+1)*event.pageSize)
  }

  addDependencie(){
    const dialog = this.dialog.open(AdddependenciedialogComponent, {
      width: "300px"
    })
    dialog.afterClosed().subscribe(res => {
      this.getAllDependences()
    })
  }
}
