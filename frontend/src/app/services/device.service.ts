import { Injectable } from '@angular/core';
import { Device } from '../models/device.model';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  private devices: Device[] = [
    { id: 1, name: 'Light', status: 'off' },
    { id: 2, name: 'Fan', status: 'off' }
  ];

  getDevices(): Device[] {
    return this.devices;
  }

  toggleDevice(device: Device): void {
    device.status = device.status === 'off' ? 'on' : 'off';
  }
}
