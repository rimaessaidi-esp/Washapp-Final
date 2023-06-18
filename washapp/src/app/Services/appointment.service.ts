import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Appointment } from '../Models/appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  //declaring host url
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  //service method to book appointments
  bookAppointment(customerId: number, dateTime: any): Observable<any> {
    const url = `${this.baseUrl}/book-appointment`;
    const appointment = { customerId, dateTime };
    return this.http.post(url, appointment);
  }

  //service method to retrieve user appointments
  getUserAppointments(customerId: number): Observable<Appointment[]> {
    const url = `${this.baseUrl}/user-appointments/${customerId}`;
    return this.http.get<Appointment[]>(url);
  }
}
