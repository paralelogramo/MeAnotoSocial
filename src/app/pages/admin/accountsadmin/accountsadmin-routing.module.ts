import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AccountsadminComponent } from './accountsadmin.component';



const routes: Routes = [
  {
    path: '',
    component: AccountsadminComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class AccountsadminRoutingModule {
}
