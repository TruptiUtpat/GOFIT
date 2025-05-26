import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private apiUrl = 'http://localhost:3000/register'; // Backend API URL

  constructor(private httpClient: HttpClient) { }

  // Function to send registration data to the backend
  registerUser(data: any): Observable<any> {
    return this.httpClient.post(this.apiUrl, data);
  }
}
