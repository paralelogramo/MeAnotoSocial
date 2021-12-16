import { Component, OnInit } from '@angular/core';
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
  selector: 'app-modulesprofessor',
  templateUrl: './modulesprofessor.component.html',
  styleUrls: ['./modulesprofessor.component.scss']
})
export class ModulesprofessorComponent implements OnInit {

  modules: moduleToShow[] = []

  constructor(
    private router:Router,
    private crudService: CrudService,
  ) {  
    let id = localStorage.getItem("id");
    this.crudService.getModulesProfessor(id).subscribe( (data: moduleToShow[]) => {
      this.modules = data;
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    localStorage.removeItem("idModule")
  }

}
