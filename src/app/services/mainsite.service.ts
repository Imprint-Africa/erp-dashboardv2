import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Mainsite} from '../models/mainsite';

@Injectable({
  providedIn: 'root'
})
export class MainsiteService {

  apiUrl = 'http://68.183.79.24/erp_core/mainsite/';

  constructor(
    private http: HttpClient
  ) { }

  getSites() {
    return this.http.get<Mainsite[]>(this.apiUrl);
  }

  CreateSite(formData) {
    return this.http.post(this.apiUrl, formData);
  }
}
