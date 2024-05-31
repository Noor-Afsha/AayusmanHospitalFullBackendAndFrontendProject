import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.scss']
})
export class CreatePatientComponent {

  patient:Patient=new Patient();

  constructor(private patientService:PatientService, private router:Router){

  }
 
  savePatient(){
    this.patientService.createPatient(this.patient).subscribe(data=>{
     console.log(data);
     this.goToPatientList();


    })
  }
  onSubmit(){
this.savePatient();
  }
  goToPatientList(){
    this.router.navigate(['/docdashboard'])
  }
}
