import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from './appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {


  constructor(private httpClient: HttpClient) { }

  private baseUrl = "http://localhost:9000/api/appointments";
  private baseUrl1 = "http://localhost:9000/api/appointments/insert";
  private baseUrl2 = "http://localhost:9000/api/appointments/delete"


  getAppointmentList(): Observable<Appointment[]> {
    return this.httpClient.get<Appointment[]>(`${this.baseUrl}`)

  }

  createAppointment(appointment: Appointment): Observable<Appointment> {
    return this.httpClient.post<Appointment>(`${this.baseUrl1}`, appointment);
  }
  deleteAppointment(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseUrl2}/${id}`);

  }
} 