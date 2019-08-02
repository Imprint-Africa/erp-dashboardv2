import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectDashboardComponent } from './components/projects/project-dashboard/project-dashboard.component';
import { ProjectFormComponent } from './components/projects/project-form/project-form.component';
import { SiteDashboardComponent } from './components/sites/site-dashboard/site-dashboard.component';
import { SiteFormComponent } from './components/sites/site-form/site-form.component';
import { TeamDashboardComponent } from './components/teams/team-dashboard/team-dashboard.component';
import { CommercialTeamComponent } from './components/teams/commercial-team/commercial-team.component';
import { ProcurementTeamComponent } from './components/teams/procurement-team/procurement-team.component';
import { CivilTeamComponent } from './components/teams/civil-team/civil-team.component';
import { InstallationTeamComponent } from './components/teams/installation-team/installation-team.component';

const routes: Routes = [
  { path: '', component: ProjectDashboardComponent },
  { path: 'createproject', component: ProjectFormComponent },
  { path: 'sites', component: SiteDashboardComponent },
  { path: 'addsite', component: SiteFormComponent },
  { path: 'teams', component: TeamDashboardComponent },
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
