import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  locationUrl = 'http://68.183.79.24/location/';

  constructor(private http: HttpClient) { }

  getLocation() {
    return this.http.get<Location[]>(this.locationUrl);
  }
}
