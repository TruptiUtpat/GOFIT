import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private apiUrl = `${environment.apiUrl}/register`;

  constructor(private httpClient: HttpClient) { }

  registerUser(data: any): Observable<any> {
    return this.httpClient.post(this.apiUrl, data);
  }
}
