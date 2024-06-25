// weather.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiUrl = 'https://open-weather13.p.rapidapi.com/city/landon/EN'; 

  private headers = new HttpHeaders({
    'x-rapidapi-host': 'open-weather13.p.rapidapi.com',
    'x-rapidapi-key': '3cdea2f3c7msh8c67744f411dfa5p109c5cjsnd05959466adb' 
  });

  constructor(private http: HttpClient) { }

  getWeather(): Observable<any> {
    return this.http.get(this.apiUrl, { headers: this.headers });
  }
}
