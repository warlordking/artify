import { Component } from '@angular/core';
import { RegisterService } from './services/register.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  registerData = {
    name: '',
    phone: '',
    email: '',
    password: '',
  };
  incomingData = {
    name: '',
    phone: '',
    email: '',
    password: '',
  };

  constructor(private registerService: RegisterService) {}

  onRegister() {
    this.registerService.register(this.registerData).subscribe((res: any) => {
      this.incomingData = res;
    });
  }

  getProfile() {
    this.registerService.getProfile().subscribe((res: any) => {
      this.registerData.name = res['name'];
    });
  }
}
