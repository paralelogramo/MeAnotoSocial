import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { CrudService } from 'src/app/services/crud.service';
import { AddmoduledialogComponent } from '../addmoduledialog/addmoduledialog.component';

class ModuleToShow {
  id: number|undefined;
  name: string|undefined;
  section: string|undefined;
  career: string|undefined;
  professor: string|undefined;
}

const SIZE: number = 8;

@Component({
  selector: 'app-modulestable',
  templateUrl: './modulestable.component.html',
  styleUrls: ['./modulestable.component.scss']
})
export class ModulestableComponent implements OnInit {
  displayedColumns: string[] = ['id','name', 'section','career', 'professor']
  modulesTable: ModuleToShow[] = [] // lista reducida de modulos para mostrar
  allModules: any[] = [] // todos los modulos

  page_size: number = SIZE;
  page_number: number = 1;
  page_size_options: number[] = [SIZE];
  pageEvent: PageEvent;
  
  constructor(
    private crudService: CrudService,
    public dialog: MatDialog
  ) {
    this.initAllModules()
  }

  ngOnInit(): void {
  }

  initAllModules(): any{
    this.crudService.getAllModules().subscribe(data => {
      this.allModules = data
      this.modulesTable = this.allModules.slice(0,this.page_size)      
    })
  } 

  onPageChange(event: PageEvent): void{    
    this.modulesTable = this.allModules.slice(event.pageIndex*event.pageSize,(event.pageIndex+1)*event.pageSize)
  }

  addModule(): void{
    const dialog = this.dialog.open(AddmoduledialogComponent, {
      width: "770px"
    })
    dialog.afterClosed().subscribe(res => {
      
    })
  }

}
