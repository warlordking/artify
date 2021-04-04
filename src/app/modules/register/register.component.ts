import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
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

  ngOnInit(): void {}

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
