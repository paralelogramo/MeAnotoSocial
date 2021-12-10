import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { CrudService } from 'src/app/services/crud.service';

interface moduleToSave{
  name: string,
  section: string,
  career: string,
  refUser: number,
}

interface userToShow{
  id: number,
  name: string,
}

@Component({
  selector: 'app-addmoduledialog',
  templateUrl: './addmoduledialog.component.html',
  styleUrls: ['./addmoduledialog.component.scss']
})
export class AddmoduledialogComponent implements OnInit {

  careers: string[] = [
    'Agronomia',
    'Administracion Publica',
    'Arquitectura',
    'Auditoria e Ingenieria en Control de Gestion',
    'Bioquimica',
    'Contador Publico y Auditor',
    'Derecho',
    'Diseño',
    'Enfermeria',
    'Fonoaudiologia',
    'Ingenieria Civil en Minas',
    'Ingenieria Civil Electrica',
    'Ingenieria Civil en Bioinformatica',
    'Ingenieria Civil en Computacion',
    'Ingenieria Civil en Obras Civiles',
    'Ingenieria Civil Industrial',
    'Ingenieria Civil Mecanica',
    'Ingenieria Civil Mecatronica',
    'Ingenieria Comercial',
    'Ingenieria en Desarrollo de Videojuegos y RV',
    'Ingenieria Informatica Empresarial',
    'Kinesiologia',
    'Licenciatura en Inter. y Form. Mus. Esp.',
    'Medicina',
    'Nutricion y Dietetica',
    'Obstetricia y Puericultira',
    'Odontologia',
    'Pedagogia de Edu. Media en Ingles',
    'Ped. en Edu. Gral. Basica con Mencion en Aleman',
    'Ped. en Edu. Gral. Basica con Mencion en Ingles',
    'Ped. en Edu. Media en Aleman',
    'Ped. en Edu. Media en Bio. y Qui.',
    'Ped. en Edu. Media en Mat. y Fis.',
    'Ped. en Edu. Parv. con Mencion en Aleman',
    'Ped. en Edu. Parv. con Mencion en Ingles',
    'Plan Comun',
    'Psicologia',
    'Tecnologia Medica',
    'Terapia Ocupacional'
  ]

  public formSignIn: FormGroup;
  public regName = '';
  public regSection = '';
  public regCareer = '';
  public regProfessor = '';

  displayedColumns: string[] = ['name']
  
  users: userToShow[] = [];

  selectedProfessor: userToShow = {
    id: 0,
    name: "",
  }

  constructor(
    private toastr: ToastrService,
    private crudService: CrudService,
    public dialogRef: MatDialogRef<AddmoduledialogComponent>,
  ) {
    this.formSignIn = new FormGroup({
      name: new FormControl(this.regName, [Validators.required]),
      section: new FormControl(this.regSection, [Validators.required]),
      career: new FormControl(this.regCareer, [Validators.required]),
      professor: new FormControl(this.regProfessor, [Validators.required]),
    });
  }

  ngOnInit(): void {
  }

  registerModule(): void{

  }

  selectCareer(row: any):void {
    this.getProfessors(row.value)
  }

  getProfessors(row: any): void{
    this.crudService.getIdNameProf(row).subscribe(data => {
      this.users = data
    })
  }
}
