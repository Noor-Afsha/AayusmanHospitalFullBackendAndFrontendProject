import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AdminauthenticationService } from '../adminauthentication.service';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.scss']
})
export class AdmindashboardComponent {

  patients: Patient[] = [];
  constructor(
    private patientService: PatientService,
    private adminAuthenticationService:AdminauthenticationService,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.getPatients();
  }

  getPatients() {
    this.patientService.getPatientList().subscribe(data => {
      this.patients = data;
    })
  }
  delete(id: number) {
    this.patientService.delete(id).subscribe(data => {
      console.log(data);
      this.getPatients();
    })

  }
  logout(){
this.adminAuthenticationService.logout();
this.router.navigate(['home-page']);
  }
}
