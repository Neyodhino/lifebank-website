import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private http: HttpClient) {}
  public getAchievement() {

    let proxylurl = 'https://cors-anywhere.herokuapp.com/';
    let url = proxylurl + 'http://lifebank.ng/api';
    return this.http.get(url);
  }
}
