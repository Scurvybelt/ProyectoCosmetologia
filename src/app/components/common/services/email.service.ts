import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


const BASE_URL = environment.apiLocal;

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  sendEmail(data: any){
    return this.http.post(`${BASE_URL}/email`, data);
  }
}
