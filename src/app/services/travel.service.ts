import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TravelService {

  constructor(private http:HttpClient) { }

  getSearch = (place?:string) => {
    return this.http.get(`https://${environment.baseUrl}/search/${environment.versionNumber}/poiSearch/${place}.json?key=${environment.key}&limit=4`);
  }

  getPlaceById = (id:string) => {
    return this.http.get(`https://${environment.baseUrl}/search/${environment.versionNumber}/place.json?entityId=${id}&key=${environment.key}`)
  }
}
