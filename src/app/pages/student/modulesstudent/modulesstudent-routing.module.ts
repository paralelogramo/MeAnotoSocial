import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModulesstudentComponent } from './modulesstudent.component';

const routes: Routes = [
  {
    path: '',
    component: ModulesstudentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesstudentRoutingModule { }
