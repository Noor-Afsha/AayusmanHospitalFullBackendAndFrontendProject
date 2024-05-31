import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medicine } from './medicine';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  constructor(private httpClient: HttpClient) { }

  private baseUrl = "http://localhost:9000/api/medicine/getAll";
  private baseUrl1 = "http://localhost:9000/api/medicine/insert";
  private baseUrl2 = "http://localhost:9000/api/medicine/getMedicineBy";
  private baseUrl3 = "http://localhost:9000/api/medicine/updateMedicine";
  private baseUrl4 = "http://localhost:9000/api/medicine/delete";







  getMedicines(): Observable<Medicine[]> {
    return this.httpClient.get<Medicine[]>(`${this.baseUrl}`);
  }
  createMedicine(medicine: Medicine): Observable<Medicine> {
    return this.httpClient.post<Medicine>(`${this.baseUrl1}`, medicine);
  }
  getMedicineById(id:number):Observable<Medicine>{
    return this.httpClient.get<Medicine>(`${this.baseUrl2}/${id}`);
  }
  updateMedicineById(id:number,medicine:Medicine):Observable<object>{
    return this.httpClient.put<Medicine>(`${this.baseUrl3}/${id}`,medicine);
  }
  deleteById(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl4}/${id}`);

  }
}
