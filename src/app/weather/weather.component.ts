import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';
import { faCloudSunRain } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent {
  city!: string;
  faCloudSunRain = faCloudSunRain;
  weatherData: any;



  constructor(private weatherService:WeatherService){}

  ngOnInit(){}

  getWeather(){
    this.weatherService.getweather(this.city)
    .subscribe(data=>{
      this.weatherData=data;
      console.log(data);
    })
  }
}
