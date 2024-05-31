import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private httpClient:HttpClient) { }

  private baseUrl="http://localhost:9000/patient/getAll";
  private baseUrl1="http://localhost:9000/patient/delete";
  private baseUrl2="http://localhost:9000/patient/insert";
  private baseUrl3="http://localhost:9000/patient/getPatient";
  private baseUrl4="http://localhost:9000/patient/update"


  getPatientList():Observable<Patient[]>{
    return this.httpClient.get<Patient[]>(`${this.baseUrl}`)
  }
  delete(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl1}/${id}`)
  }
  createPatient(patient:Patient): Observable<Patient>{
    return this.httpClient.post<Patient>(`${this.baseUrl2}`,patient);
  }
  getPatientById(id:number):Observable<Patient>{
    return this.httpClient.get<Patient>(`${this.baseUrl3}/${id}`);
  }
  updatePatientById(id:number,patient:Patient):Observable<Object>{
    return this.httpClient.put<Patient>(`${this.baseUrl4}/${id}`,patient);

  }
}
