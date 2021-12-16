import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { EventsprofessorComponent } from './eventsprofessor.component';



const routes: Routes = [
  {
    path: '',
    component: EventsprofessorComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class EventsprofessorRoutingModule {
}