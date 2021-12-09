import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';

interface moduleToShow{
  id: number;
  name: string;
  section: string;
  career: string;
  professor: string;
  news: number;
}

@Component({
  selector: 'app-modulesstudent',
  templateUrl: './modulesstudent.component.html',
  styleUrls: ['./modulesstudent.component.scss']
})
export class ModulesstudentComponent implements OnInit , OnDestroy{

  modules: moduleToShow[] = []


  constructor(
    private router:Router,
    private crudService: CrudService,
  ) {  
    let id = localStorage.getItem("id");
    this.crudService.getModulesUser(id).subscribe( (data: moduleToShow[]) => {
      this.modules = data;
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
      localStorage.removeItem("idModule")
  }
}
