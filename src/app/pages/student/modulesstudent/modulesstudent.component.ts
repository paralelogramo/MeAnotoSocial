import { Component, OnInit } from '@angular/core';

interface moduleToShow{
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
export class ModulesstudentComponent implements OnInit {

  
  module1: moduleToShow = {
    name: "Introducción a la Programación",
    section: "B",
    career: "Ingeniería Civil en Computación",
    professor: "Ruth Garrido",
    news: 3,
  }
  module2: moduleToShow = {
    name: "Introducción a la ICC",
    section: "A",
    career: "Ingeniería Civil en Computación",
    professor: "Daniel Moreno",
    news: 2,
  }
  module3: moduleToShow = {
    name: "Teoría de Sistemas",
    section: "A",
    career: "Ingeniería Civil en Computación",
    professor: "Matthew Bardeen",
    news: 1,
  }
  module4: moduleToShow = {
    name: "Introducción a la Matemática",
    section: "D",
    career: "Plan Común",
    professor: "Rodrigo Bustamante",
    news: 0,
  }
  module5: moduleToShow = {
    name: "Comunicación Oral y Escrita I",
    section: "C",
    career: "Plan Común",
    professor: "Un profesor que no se cual es",
    news: 5,
  }

  modules: moduleToShow[] = []


  constructor() {
    this.modules.push(this.module1)
    this.modules.push(this.module2)
    this.modules.push(this.module3)
    this.modules.push(this.module4)
    this.modules.push(this.module5)    
  }

  ngOnInit(): void {
  }

}
