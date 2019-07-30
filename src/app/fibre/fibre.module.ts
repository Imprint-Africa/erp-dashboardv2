import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FibreRoutingModule } from './fibre-routing.module';

import { ProjectFormComponent } from './components/projects/project-form/project-form.component';
import { ProjectDashboardComponent } from './components/projects/project-dashboard/project-dashboard.component';
import { SiteFormComponent } from './components/sites/site-form/site-form.component';
import { SiteDashboardComponent } from './components/sites/site-dashboard/site-dashboard.component';
import { SiteTeamsComponent } from './components/sites/site-teams/site-teams.component';

@NgModule({
  declarations: [
    ProjectFormComponent,
    ProjectDashboardComponent,
    SiteFormComponent,
    SiteDashboardComponent,
    SiteTeamsComponent
  ],
  imports: [
    CommonModule,
    FibreRoutingModule
  ],
  exports: []
})
export class FibreModule { }
