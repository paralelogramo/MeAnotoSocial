import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleseventsstudentComponent } from './moduleseventsstudent.component';

const routes: Routes = [
  {
    path: '',
    component: ModuleseventsstudentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleseventsstudentRoutingModule { }
