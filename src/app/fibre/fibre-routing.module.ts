import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectDashboardComponent } from './components/projects/project-dashboard/project-dashboard.component';
import { ProjectFormComponent } from './components/projects/project-form/project-form.component';

const routes: Routes = [
  { path: '', component: ProjectDashboardComponent },
  { path: 'createproject', component: ProjectFormComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FibreRoutingModule { }



