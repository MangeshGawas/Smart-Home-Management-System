// dashboard.component.ts

import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  weatherData: any;
  loading: boolean = true;
  error: string | null = null;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getWeatherData();
  }

  getWeatherData(): void {
    this.weatherService.getWeather()
      .subscribe(
        (data) => {
          this.weatherData = data;
          this.loading = false;
          console.log('Weather Data:', this.weatherData);
        },
        (error) => {
          this.error = error.message || 'Error fetching weather data';
          this.loading = false;
          console.error('Error fetching weather data:', error);
        }
      );
  }
}
