import { Component } from '@angular/core';
import { AppointmentService } from 'src/app/Services/appointment.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent {
  customerId: number;
  dateTime: { date: string, time: string };
  appointments: any[];

  constructor(private appointmentService: AppointmentService) {
    this.customerId = 1;
    this.dateTime = { date: '', time: '' };
    this.appointments = [];
  }

  bookAppointment(): void {
    this.appointmentService.bookAppointment(this.customerId, this.dateTime).subscribe(
      () => {
        console.log('Appointment booked successfully');
        this.getAppointments();
      },
      (error) => {
        console.error('Failed to book appointment:', error);
      }
    );
  }

  getAppointments(): void {
    this.appointmentService.getUserAppointments(this.customerId).subscribe(
      (appointments) => {
        this.appointments = appointments;
      },
      (error) => {
        console.error('Failed to fetch appointments:', error);
      }
    );
  }
}
