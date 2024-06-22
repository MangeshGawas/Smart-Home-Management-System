import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DeviceManagementComponent } from './components/device-management/device-management.component';
import { RoomManagementComponent } from './components/room-management/room-management.component';
import { AutomationRulesComponent } from './components/automation-rules/automation-rules.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DeviceManagementComponent,
    RoomManagementComponent,
    AutomationRulesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
