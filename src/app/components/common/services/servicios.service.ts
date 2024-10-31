import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const BASE_URL = environment.apiLocal;

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor(private http: HttpClient) { }

  getServicios() {
    return this.http.get(`${BASE_URL}`);
  }

  getProductoById(id: any){
    return this.http.get(`${BASE_URL}?id=${id}`);
  }

  getProductoByCategory(category: string){
    return this.http.get(`${BASE_URL}?category=${category}`);
  }

  getTratamiento(tratamiento: any){
    return this.http.get(`${BASE_URL}?category=${tratamiento}`);
  }

  getServiceByNameAndCategory(name: any, category: any) {
    return this.http.get<any>(`${BASE_URL}?name=${name}&category=${category}`);
  }

  getServiceByIdAndCategory(id: any, category: any) {
    return this.http.get<any>(`${BASE_URL}?id=${id}&category=${category}`);
  }

  setServicio(data: any){
    return this.http.post(`${BASE_URL}`, data);
  }
}
