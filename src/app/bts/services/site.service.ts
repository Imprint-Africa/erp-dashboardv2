import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Site } from '../models/site';

@Injectable({
  providedIn: 'root'
})
export class SiteService {

  apiUrl = 'http://68.183.79.24/erp_construction/sites/';

  constructor(
    private http: HttpClient,
  ) { }

  fetchSites() {
    return this.http.get<Site[]>(this.apiUrl);
  }
}
