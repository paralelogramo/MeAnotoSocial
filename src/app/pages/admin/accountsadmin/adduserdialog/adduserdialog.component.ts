import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/User';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-adduserdialog',
  templateUrl: './adduserdialog.component.html',
  styleUrls: ['./adduserdialog.component.scss']
})
export class AdduserdialogComponent implements OnInit {

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

  types: String[] = [
    "Administrador",
    "Operativo",
    "Profesor"
  ]

  public formSignIn: FormGroup;
  public signMainName = '';
  public signSurName = '';
  public signNick = '';
  public signEmail = '';
  public signPassword = '';
  public signCareer = '';
  public signType = '';

  userModel: User = new User(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined);

  constructor(
    private toastr: ToastrService,
    private crudService: CrudService,
    public dialogRef: MatDialogRef<AdduserdialogComponent>,
  ) {
    this.formSignIn = new FormGroup({
      mainName: new FormControl(this.signMainName, [Validators.required]),
      surName: new FormControl(this.signSurName, [Validators.required]),
      nick: new FormControl(this.signNick, [Validators.required]),
      email: new FormControl(this.signEmail, [Validators.required, Validators.email]),
      password: new FormControl(this.signPassword, [Validators.required]),
      career: new FormControl(this.signCareer),
      type: new FormControl(this.signType, [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  sign(): void{
    if (this.formSignIn.value.mainName == "" ||
        this.formSignIn.value.surName == "" ||
        this.formSignIn.value.nick == "" ||
        this.formSignIn.value.email == "" ||
        this.formSignIn.value.password == "" ||
        this.formSignIn.value.type == ""
        ) {
      this.showError2()
    }
    else{
      this.userModel.mainName = this.formSignIn.value.mainName;
      this.userModel.surName = this.formSignIn.value.surName;
      this.userModel.nick = this.formSignIn.value.nick;
      this.userModel.email = this.formSignIn.value.email;
      this.userModel.pass = this.formSignIn.value.password;
      this.userModel.career = this.formSignIn.value.career;
      console.log(this.formSignIn.value.type)
      if(this.formSignIn.value.type == "Administrador"){
        this.userModel.type = 0
      }
      if(this.formSignIn.value.type == "Operativo"){
        this.userModel.type = 2
      }
      if(this.formSignIn.value.type == "Profesor"){
        this.userModel.type = 1
      }
      if(this.formSignIn.value.career == ""){
        this.userModel.career = undefined
      }

      this.crudService.register(this.userModel).subscribe(data => {
        this.showSuccess2();
        this.formSignIn.reset()
        this.dialogRef.close()
      })
    }
  }

  private showSuccess2() {
    this.toastr.success(
      'Listo!', 'Usuario Creado Correctamente'
    );
  }

  private showError2() {
    this.toastr.error(
      'Tienes campos vacios','¡Ups!'
    );
  }
}
