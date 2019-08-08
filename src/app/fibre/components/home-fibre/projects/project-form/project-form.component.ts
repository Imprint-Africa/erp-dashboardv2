import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

import { ProjectService } from '../../../../services/project.service';
import { SiteService } from 'src/app/bts/services/site.service';
import { Site } from 'src/app/bts/models/site';


@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.sass']
})
export class ProjectFormComponent implements OnInit {

  site$: Site[];
  projectForm: FormGroup;
  userId = sessionStorage.getItem('id');


  constructor(
    private fb: FormBuilder,
    private siteService: SiteService,
    private projectService: ProjectService,
    private router: Router,
    private datePipe: DatePipe
  ) { }

  ngOnInit() {
    this.projectForm = this.fb.group({
      project_name: ['', Validators.required],
      site_name: ['', Validators.required],
      start_date: ['', Validators.required]
    });
    this.getSites();
  }

  getSites() {
    this.siteService.fetchSites()
    .subscribe(data => {
      this.site$ = data;
    });
  }


  saveProject() {
    const formData = new FormData();

    const date = this.projectForm.get('start_date').value;
    const myDate = this.datePipe.transform(date, 'yyyy-MM-dd');

    formData.append('project_name', this.projectForm.get('project_name').value);
    formData.append('site_name', this.projectForm.get('site_name').value);
    formData.append('start_date', myDate);
    formData.append('created_by', this.userId);

    this.projectService.createProject(formData)
    .subscribe(
      () => {
        window.alert('Successfully created a project');
        this.router.navigate(['/fibre/']);
        console.log('Success!');
      },
      error => {
        window.alert('An Error occured. Please check the form and correct the Details');
        console.error('Error!', error);
      });
  }

}
