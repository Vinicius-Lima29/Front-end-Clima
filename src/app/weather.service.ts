import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey='c1bb954075782da05229b8467911072f'

  constructor(private http:HttpClient) { }

  getweather(city:string){
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q={city}&appid={this.apiKey}');

  }
}
