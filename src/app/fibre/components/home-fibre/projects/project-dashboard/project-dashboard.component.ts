import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../../services/project.service';
import { Project } from '../../../../models/project';

@Component({
  selector: 'app-project-dashboard',
  templateUrl: './project-dashboard.component.html',
  styleUrls: ['./project-dashboard.component.sass']
})
export class ProjectDashboardComponent implements OnInit {

  project$: Project[];
  searchTerm;

  constructor(
    private projectService: ProjectService
  ) { }

  ngOnInit() {
    this.displayProjects();
  }

  displayProjects() {
    this.projectService.fetchProjects()
    .subscribe(data => {
      this.project$ = data.reverse();
    });
  }

}
