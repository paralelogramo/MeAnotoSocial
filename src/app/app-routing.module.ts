import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DashboardadminComponent } from './pages/admin/dashboardadmin/dashboardadmin.component';
import { AuthGuard, EventGuard } from './pages/auth/auth.guard';
import { DashboardprofessorComponent } from './pages/professor/dashboardprofessor/dashboardprofessor.component';
import { DashboardstudentComponent } from './pages/student/dashboardstudent/dashboardstudent.component';

const routes: Routes = [
  {
    path:'login',
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'admin/dashboard',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    component: DashboardadminComponent
  },
  {
    path: 'admin/cuentas',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/admin/accountsadmin/accountsadmin.module').then(m => m.AccountsadminModule)
  },
  {
    path: 'admin/salas',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/admin/dependenciesadmin/dependenciesadmin.module').then(m => m.DependenciesadminModule)
  },
  {
    path: 'admin/cursos',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/admin/modulesadmin/modulesadmin.module').then(m => m.ModulesadminModule)
  },
  {
    path: 'estudiante/dashboard',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    component: DashboardstudentComponent
  },
  {
    path: 'estudiante/cursos',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/student/modulesstudent/modulesstudent.module').then(m => m.ModulesstudentModule)
  },
  {
    path: 'estudiante/cursos/eventos',
    pathMatch: 'full',
    canActivate: [AuthGuard, EventGuard],
    loadChildren: () => import('./pages/student/moduleseventsstudent/moduleseventsstudent.module').then(m => m.ModuleseventsstudentModule)
  },
  {
    path: 'estudiante/miseventos',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/student/eventsstudent/eventsstudent.module').then(m => m.EventsstudentModule)
  },
  {
    path: 'profesor/dashboard',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    component: DashboardprofessorComponent
  },
  {
    path: 'profesor/cursos',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/professor/modulesprofessor/modulesprofessor.module').then(m => m.ModulesprofessorModule)
  },
  {
    path: 'profesor/cursos/detalle',
    pathMatch: 'full',
    canActivate: [AuthGuard, EventGuard],
    loadChildren: () => import('./pages/professor/detailmoduleprofessor/detailmoduleprofessor.module').then(m => m.DetailmoduleprofessorModule)
  },
  {
    path: 'profesor/miseventos',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/professor/eventsprofessor/eventsprofessor.module').then(m => m.EventsprofessorModule)
  },
  {
    path:'',
    redirectTo:'login',
    pathMatch: 'full' 
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    preloadingStrategy: PreloadAllModules,
    relativeLinkResolution: 'legacy'
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
