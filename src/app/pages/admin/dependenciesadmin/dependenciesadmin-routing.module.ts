import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DependenciesadminComponent } from './dependenciesadmin.component';



const routes: Routes = [
  {
    path: '',
    component: DependenciesadminComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class DependenciesadminRoutingModule {
}
