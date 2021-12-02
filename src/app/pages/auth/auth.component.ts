import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { CrudService } from 'src/app/services/crud.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastrService } from 'ngx-toastr';
import { routes } from 'src/app/consts/routes';
import { ReCaptchaType } from 'ngx-captcha';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

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

  siteKey: string = "6Lee3HEdAAAAAIHjoQ8kjTr4Gdm9an25eFXbicYi";

  public routers: typeof routes = routes;

  public formLogin: FormGroup;
  public loginEmail: string = '';
  public loginPassword: string = '';
  public recaptchaAproved: string = '';

  public formSignIn: FormGroup;
  public signMainName = '';
  public signSurName = '';
  public signNick = '';
  public signEmail = '';
  public signPassword = '';
  public signCareer = '';

  userModel: User = new User(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined);

  constructor(
    private router:Router,
    private crudService: CrudService,
    private toastr: ToastrService
  ) {
    this.formLogin = new FormGroup({
      email: new FormControl(this.loginEmail, [Validators.required, Validators.email]),
      password: new FormControl(this.loginPassword, [Validators.required]),
      recaptcha: new FormControl('', [Validators.required])
    });
    this.formSignIn = new FormGroup({
      mainName: new FormControl(this.signMainName, [Validators.required]),
      surName: new FormControl(this.signSurName, [Validators.required]),
      nick: new FormControl(this.signNick, [Validators.required]),
      email: new FormControl(this.signEmail, [Validators.required, Validators.email]),
      password: new FormControl(this.signPassword, [Validators.required]),
      career: new FormControl(this.signCareer, [Validators.required])
    });
  }

  public ngOnInit(): void {
  }

  public login(): void {

    if (this.formLogin.value.email == "" || this.formLogin.value.password == "" || this.recaptchaAproved == "") {
      this.showError2()
    }
    else{
      this.userModel.email = this.formLogin.value.email;
      this.userModel.pass = this.formLogin.value.password;
      this.crudService.getUser(this.userModel).subscribe(data => {
        if(!data){
          this.showError();
        }
        else{
          this.showSuccess(data.nick);
          localStorage.setItem('id',data.id+"")
          if (data.type == 0){
            this.router.navigate([this.routers.DASHBOARD]);
          }
          else if (data.type == 1){
          }
          else if (data.type == 2){
          }
          else if (data.type == 3){
            this.router.navigate([this.routers.DASHBOARDS]);
          }
        }
      })
    }
  }

  private showSuccess(nick: String | undefined) {
    this.toastr.success(
      'Bienvenid@ '+nick+'', '¡Hola Nuevamente!'
    );
  }

  private showError() {
    this.toastr.error(
      'Parece que son las credenciales incorrectas','¡Ups!'
    );
  }

  private showError2() {
    this.toastr.error(
      'Tienes campos vacios','¡Ups!'
    );
  }

  public handleExpire(){
    this.recaptchaAproved = '';
  }

  public handleSuccess(event: string){
    this.recaptchaAproved = event;
  }

  public sign(){

  }
}
