import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeFibrehomeComponent} from './components/home-fibrehome/home-fibrehome.component';
import {ProjectDashboardComponent} from './components/home-fibrehome/projects/project-dashboard/project-dashboard.component';
import {ProjectTeamOverviewComponent} from './components/home-fibrehome/projects/project-team-overview/project-team-overview.component';
import {CommercialTeamTasksAllComponent} from "./components/home-fibrehome/teams/commercial-team/commercial-team-tasks-all/commercial-team-tasks-all.component";

const routes: Routes = [
// Projects
  {path: 'projects', component: HomeFibrehomeComponent,
    children: [{ path: '', component: ProjectDashboardComponent }]
  },
  // Project teams
  {path: 'project-teams', component: HomeFibrehomeComponent,
    children: [{path: '', component: ProjectTeamOverviewComponent}]
  },
  {path: 'commercial-tasks', component: HomeFibrehomeComponent,
    children: [{path: '', component: CommercialTeamTasksAllComponent}]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FibreHomeRoutingModule { }
