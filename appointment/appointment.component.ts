import { Component } from '@angular/core';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent {

  //creating appointment array which will be empty:-
  appointments: Appointment[] = [];

  //service injected
  constructor(private appointmentService: AppointmentService) { }


  ngOnInit(): void {
    this.getAppointments();
  }

  //method
  getAppointments() {
    this.appointmentService.getAppointmentList().subscribe(data => {
      this.appointments = data;
    })
  }
  delete(id: number) {
    this.appointmentService.deleteAppointment(id).subscribe(data => {
      console.log(data);
      this.getAppointments();
    }

    )
  }
}

