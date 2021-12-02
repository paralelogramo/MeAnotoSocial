import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ModulesadminComponent } from './modulesadmin.component';



const routes: Routes = [
  {
    path: '',
    component: ModulesadminComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class ModulesadminRoutingModule {
}
