import { Component, OnInit } from '@angular/core';
import {MainsiteService} from '../../../../../services/mainsite.service';
import {LocationService} from '../../../../../services/location.service';
import {Mainsite} from '../../../../../models/mainsite';
import {ProjectService} from '../../../../services/project.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-site-dashboard',
  templateUrl: './site-dashboard.component.html',
  styleUrls: ['./site-dashboard.component.sass']
})
export class SiteDashboardComponent implements OnInit {

  project: any;
  listOfSites: any;
  site$: Mainsite[];
  location$: Location[];

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private siteService: MainsiteService,
    private locationService: LocationService

  ) { }

  ngOnInit() {
    this.displaySites();
    this.getSites();
    this.getLocations();
  }

  displaySites() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.projectService.getProjectById(id)
      .subscribe(data => {
        this.project = data;
        this.listOfSites = data.site_name;
      });
  }
  getSites() {
    this.siteService.getSites()
      .subscribe(data => {
        this.site$ = data;
      });
  }
  getLocations() {
    this.locationService.getLocation()
      .subscribe(data => {
        this.location$ = data;
      });
  }
}
