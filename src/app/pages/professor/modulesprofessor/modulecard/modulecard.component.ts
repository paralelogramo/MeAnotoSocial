import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { routes } from 'src/app/consts/routes';

interface moduleToShow{
  id: number
  name: string;
  section: string;
  career: string;
  professor: string;
  news: number;
}


@Component({
  selector: 'app-modulecard',
  templateUrl: './modulecard.component.html',
  styleUrls: ['./modulecard.component.scss']
})
export class ModulecardComponent {

  @Input() module: moduleToShow;
  public routers: typeof routes = routes;

  constructor(
    private router: Router,
    private snackBar: MatSnackBar
    ) {
  }

  showDetails(): void{
    sessionStorage.setItem("idModule",this.module.id+"")
    this.router.navigate([this.routers.DETAILMODULESP]);
    }
}
