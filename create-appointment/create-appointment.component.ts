import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.scss']
})
export class CreateAppointmentComponent {

  //create an object:-

  appointment: Appointment = new Appointment();

  constructor(private appointmentService: AppointmentService, private router: Router) { }

  saveAppointment() {
    this.appointmentService.createAppointment(this.appointment).subscribe(data => {
      console.log(data);
      this.goToAppointment(); // Call goToAppointment() only after the asynchronous operation completes
    });
  }
  
  onSubmit() {
    this.saveAppointment();
  }

  goToAppointment() {
    this.router.navigate(['/appointmentlist']);
  }
}
