import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  apiUrl = 'http://68.183.79.24/erp_fiber_ftts/fttsproject/';

  constructor(
    private http: HttpClient
  ) { }

  fetchProjects() {
    return this.http.get<Project[]>(this.apiUrl);
  }

  createProject(formData) {
    return this.http.post(this.apiUrl, formData);
  }
}
