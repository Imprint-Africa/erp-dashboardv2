import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FibreRoutingModule } from './fibre-routing.module';
import { SidebarModule } from 'ng-sidebar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


import { ProjectFormComponent } from './components/home-fibre/projects/project-form/project-form.component';
import { ProjectDashboardComponent } from './components/home-fibre/projects/project-dashboard/project-dashboard.component';

import { SiteFormComponent } from './components/home-fibre/sites/site-form/site-form.component';
import { SiteDashboardComponent } from './components/home-fibre/sites/site-dashboard/site-dashboard.component';

import { TeamDashboardComponent } from './components/home-fibre/teams/team-dashboard/team-dashboard.component';
import { CommercialTeamComponent } from './components/home-fibre/teams/commercial-team/commercial-team.component';
import { CivilTeamComponent } from './components/home-fibre/teams/civil-team/civil-team.component';
import { ProcurementTeamComponent } from './components/home-fibre/teams/procurement-team/procurement-team.component';
import { InstallationTeamComponent } from './components/home-fibre/teams/installation-team/installation-team.component';
import { HomeComponent } from './components/home-fibre/home.component';
import {ToastrModule} from 'ngx-toastr';

@NgModule({
  declarations: [
    ProjectFormComponent,
    ProjectDashboardComponent,
    SiteFormComponent,
    SiteDashboardComponent,
    TeamDashboardComponent,
    CommercialTeamComponent,
    CivilTeamComponent,
    ProcurementTeamComponent,
    InstallationTeamComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    FibreRoutingModule,
    SidebarModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    ToastrModule.forRoot({
      timeOut: 7000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: false,
    }),
  ],
  exports: []
})
export class FibreModule { }
