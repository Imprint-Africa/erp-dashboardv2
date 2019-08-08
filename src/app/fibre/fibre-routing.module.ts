import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectDashboardComponent } from './components/home-fibre/projects/project-dashboard/project-dashboard.component';
import { ProjectFormComponent } from './components/home-fibre/projects/project-form/project-form.component';
import { SiteDashboardComponent } from './components/home-fibre/sites/site-dashboard/site-dashboard.component';
import { SiteFormComponent } from './components/home-fibre/sites/site-form/site-form.component';
import { TeamDashboardComponent } from './components/home-fibre/teams/team-dashboard/team-dashboard.component';
import { CommercialTeamComponent } from './components/home-fibre/teams/commercial-team/commercial-team.component';
import { ProcurementTeamComponent } from './components/home-fibre/teams/procurement-team/procurement-team.component';
import { CivilTeamComponent } from './components/home-fibre/teams/civil-team/civil-team.component';
import { InstallationTeamComponent } from './components/home-fibre/teams/installation-team/installation-team.component';
import {HomeComponent} from './components/home-fibre/home.component';

const routes: Routes = [
  // Projects
  {path: 'projects', component: HomeComponent,
    children: [{ path: '', component: ProjectDashboardComponent }]
  },
  {path: 'sites', component: HomeComponent,
  children: [{path: '', component: SiteDashboardComponent}]
  },
  {path: 'site-teams', component: HomeComponent,
  children: [{path: '', component: TeamDashboardComponent}]
  },

  { path: 'createproject', component: ProjectFormComponent },
  // { path: 'sites', component: SiteDashboardComponent },
  { path: 'addsite', component: SiteFormComponent },
  // { path: 'teams', component: TeamDashboardComponent },
  { path: 'commercialteam', component: CommercialTeamComponent },
  { path: 'procurementteam', component: ProcurementTeamComponent },
  { path: 'civilteam', component: CivilTeamComponent },
  { path: 'installationteam', component: InstallationTeamComponent },

  // { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FibreRoutingModule { }
