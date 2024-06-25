# Smart Home Management System
<!-- Image with specific dimensions -->
<img src="https://github.com/MangeshGawas/Smart-Home-Management-System/assets/70948059/708c514c-689c-4498-91e8-09f274078a91" alt="Image 1" width="500" height="300">

<!-- Another image with specific dimensions -->
<img src="https://github.com/MangeshGawas/Smart-Home-Management-System/assets/70948059/4364e6d3-5ec3-4723-9cfc-af567c717ce2" alt="Image 2" width="500" height="300">

The **Smart Home Management System** is an Angular-based web application designed to provide users with a seamless interface for monitoring and controlling various smart devices in their homes. The application features a dashboard that not only gives an overview of the smart home devices but also integrates real-time news and weather forecasts using data from RapidAPI. The system is designed with a modern user interface leveraging Bootstrap and Angular Material for a responsive and visually appealing layout.

## Features

- **Device Control:** Users can view and toggle the status of various smart home devices (e.g., lights, fans) directly from the dashboard.
- **News Integration:** The dashboard displays the latest news headlines, providing users with up-to-date information.
- **Weather Forecast:** Real-time weather data is displayed, allowing users to stay informed about current weather conditions.
- **Responsive Design:** The application is fully responsive, ensuring a seamless experience across different devices.

## Angular Concepts Used

1. **Components:** The project is structured using Angular components to create a modular and maintainable codebase. Components include `DashboardComponent`, `DeviceControlComponent`, `HeaderComponent`, `SidebarComponent`, and `SettingsComponent`.
2. **Data Binding:** Two-way data binding is used to keep the UI and the data model in sync, especially for toggling device statuses.
3. **Services:** Angular services are used to fetch data from RapidAPI for news and weather forecasts.
4. **Dependency Injection:** Services are injected into components to provide data and functionality.
5. **Routing:** Angular Router is used for navigation between different views or pages within the application.
6. **Directives:** Built-in directives like `*ngFor` and `*ngIf` are used for dynamically rendering lists and conditional content.
7. **HTTP Client:** The Angular `HttpClientModule` is used to make HTTP requests to external APIs.
8. **Pipes:** Angular pipes are used to format data before displaying it in the template.

## Architecture

The application follows a component-based architecture, promoting reusability and separation of concerns. The architecture is as follows:

1. **App Module:** The root module that bootstraps the application and imports necessary Angular modules.
2. **Components:**
   - **AppComponent:** The root component containing the main structure of the application.
   - **HeaderComponent:** Manages the navigation header.
   - **SidebarComponent:** Manages the sidebar navigation.
   - **DashboardComponent:** The main component displaying the device controls, news, and weather forecast.
   - **DeviceControlComponent:** A reusable component for displaying and controlling individual devices.
   - **SettingsComponent:** Manages user and device settings.
3. **Services:**
   - **NewsService:** Fetches news data from RapidAPI.
   - **WeatherService:** Fetches weather data from RapidAPI.
4. **Models:** Defines TypeScript interfaces or classes for the data structures used in the application (e.g., `Device`, `News`, `Weather`).

## Setup and Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/MangeshGawas/Smart-Home-Management-System.git
   cd smart-home-management-system
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the application:**
   ```bash
   ng serve
   ```

4. **Access the application:**
   Open your browser and navigate to `http://localhost:4200`.

## Conclusion

This project leverages various Angular concepts and best practices to build a scalable and maintainable Smart Home Management System. By integrating real-time data for news and weather forecasts, it provides a comprehensive solution for smart home users, enhancing their experience and convenience.


