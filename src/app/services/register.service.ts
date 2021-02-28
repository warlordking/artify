import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  baseUrl = 'http://117.205.195.88:5000/greeting';

  constructor(private httpClient: HttpClient) {}

  register(entity) {
    return this.httpClient.post(this.baseUrl, entity);
  }

  getProfile() {
    return this.httpClient.get<Observable<any>>(this.baseUrl);
  }
}
