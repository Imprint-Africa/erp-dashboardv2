import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FibreHomeRoutingModule } from './fibre-home-routing.module';
import { ProjectDashboardComponent } from './components/home-fibrehome/projects/project-dashboard/project-dashboard.component';
import { ProjectTeamOverviewComponent } from './components/home-fibrehome/projects/project-team-overview/project-team-overview.component';
import { HomeFibrehomeComponent } from './components/home-fibrehome/home-fibrehome.component';
import { CommercialTeamTasksAllComponent } from './components/home-fibrehome/teams/commercial-team/commercial-team-tasks-all/commercial-team-tasks-all.component';

@NgModule({
  declarations: [ProjectDashboardComponent, ProjectTeamOverviewComponent, HomeFibrehomeComponent, CommercialTeamTasksAllComponent],
  imports: [
    CommonModule,
    FibreHomeRoutingModule
  ]
})
export class FibreHomeModule { }
