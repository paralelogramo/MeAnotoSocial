import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DetailmoduleprofessorComponent } from './detailmoduleprofessor.component';



const routes: Routes = [
  {
    path: '',
    component: DetailmoduleprofessorComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class DetailmoduleprofessorRoutingModule {
}