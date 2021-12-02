import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { EventsstudentComponent } from './eventsstudent.component';



const routes: Routes = [
  {
    path: '',
    component: EventsstudentComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class EventstudentRoutingModule {
}
