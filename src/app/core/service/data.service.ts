import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}
  public getAchievement() {
    return this.http.get('http://lifebank.ng/api');
  }
}
