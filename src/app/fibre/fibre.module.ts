import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FibreRoutingModule } from './fibre-routing.module';
import { SidebarModule } from 'ng-sidebar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { SidebarComponent } from './components/sidebar/sidebar.component';

import { ProjectFormComponent } from './components/projects/project-form/project-form.component';
import { ProjectDashboardComponent } from './components/projects/project-dashboard/project-dashboard.component';

import { SiteFormComponent } from './components/sites/site-form/site-form.component';
import { SiteDashboardComponent } from './components/sites/site-dashboard/site-dashboard.component';

import { TeamDashboardComponent } from './components/teams/team-dashboard/team-dashboard.component';
import { CommercialTeamComponent } from './components/teams/commercial-team/commercial-team.component';
import { CivilTeamComponent } from './components/teams/civil-team/civil-team.component';
import { ProcurementTeamComponent } from './components/teams/procurement-team/procurement-team.component';
import { InstallationTeamComponent } from './components/teams/installation-team/installation-team.component';

@NgModule({
  declarations: [
    SidebarComponent,
    ProjectFormComponent,
    ProjectDashboardComponent,
    SiteFormComponent,
    SiteDashboardComponent,
    TeamDashboardComponent,
    CommercialTeamComponent,
    CivilTeamComponent,
    ProcurementTeamComponent,
    InstallationTeamComponent,
  ],
  imports: [
    CommonModule,
    FibreRoutingModule,
    SidebarModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
  ],
  exports: []
})
export class FibreModule { }
