import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../../services/device.service';
import { Device } from '../../models/device.model';

@Component({
  selector: 'app-device-control',
  templateUrl: './device-control.component.html',
  styleUrls: ['./device-control.component.css']
})
export class DeviceControlComponent implements OnInit {

  devices: { name: string, status: string, icon: string }[] = [];

  ngOnInit(): void {
    this.devices = [
      { name: 'Light', status: 'Off', icon: 'lightbulb' },
      { name: 'Fan 1', status: 'Off', icon: 'games' },
      { name: 'Fan 2', status: 'Off', icon: 'games' },
      { name: 'Fan 3', status: 'Off', icon: 'games' },
      { name: 'Fan 4', status: 'Off', icon: 'games' },
      { name: 'Fan 5', status: 'Off', icon: 'games' },
      { name: 'Music', status: 'Off', icon: 'music_video' },
      { name: 'Charging Point', status: 'Off', icon: 'power' },
      { name: 'Light 8', status: 'Off', icon: 'lightbulb' },
      { name: 'Light 9', status: 'Off', icon: 'lightbulb' },
      { name: 'Light 10', status: 'Off', icon: 'lightbulb' },
      { name: 'Light 11', status: 'Off', icon: 'lightbulb' },
      { name: 'Light 12', status: 'Off', icon: 'lightbulb' },
    ];
  }

  toggleDeviceStatus(device: { name: string, status: string }): void {
    device.status = device.status === 'Off' ? 'On' : 'Off';
  }
}
