import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const BASE_URL = environment.apiLocal+'/login';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  // existsUser(data:any){
  //   return this.http.get()
  // }

  login(username: string, password: string){
    return this.http.post( `${BASE_URL}`,{username,password})
  }
  
}
