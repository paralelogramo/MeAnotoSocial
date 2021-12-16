import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ModulesprofessorComponent } from './modulesprofessor.component';



const routes: Routes = [
  {
    path: '',
    component: ModulesprofessorComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class ModuleprofessorRoutingModule {
}