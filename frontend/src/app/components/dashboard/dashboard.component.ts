// dashboard.component.ts

import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { NewsService  } from '../../services/news.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  weatherData: any;
  loading: boolean = true;
  error: string | null = null;

  //news
  newsSources: any=[];
  articles: any=[];

  constructor(private weatherService: WeatherService,private newsService: NewsService) { }

  ngOnInit(): void {
    this.getWeatherData();
    this.initSources();
    this.initArticles();
    }

  getWeatherData(): void {
    this.weatherService.getWeather()
      .subscribe(
        (data) => {
          this.weatherData = data;
          this.loading = false;
          // console.log('Weather Data:', this.weatherData);
        },
        (error) => {
          this.error = error.message || 'Error fetching weather data';
          this.loading = false;
          console.error('Error fetching weather data:', error);
        }
      );
  }

  initSources(): void {
    this.newsService.initSources()
      .subscribe((data: any) => {
        this.newsSources = data.sources;
        console.log('News Sources:', this.newsSources);
      }, (error) => {
        console.error('Error fetching news sources:', error);
      });
  }

  initArticles(): void {
    this.newsService.initArticles()
      .subscribe((data: any) => {
        this.articles = data.articles;
        // console.log('Top Headlines:', this.articles);
      }, (error) => {
        console.error('Error fetching top headlines:', error);
      });
  }



  
}
