import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VirtualTimeScheduler } from 'rxjs';
import { DocauthenticationService } from '../docauthentication.service';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-docdashboard',
  templateUrl: './docdashboard.component.html',
  styleUrls: ['./docdashboard.component.scss']
})
export class DocdashboardComponent {
  constructor(
    private patientService: PatientService, 
    private router: Router,
    private docAuthenticationService:DocauthenticationService
    ) { }

  patients: Patient[] = [];

  ngOnInit(): void {
    this.getPatients();
  }
  getPatients() {
    this.patientService.getPatientList().subscribe(data => {
      this.patients = data;
    })
  }
  update(id: number) {
    this.router.navigate(['update-patient', id])
  }
  delete(id: number) {
    this.patientService.delete(id).subscribe(data => {
      console.log(data);
      this.getPatients();
    })
}
view(id:number){
this.router.navigate(['view-patient',id]);
}

logout(){
this.docAuthenticationService.logout();
this.router.navigate(['home-page']);
}
}