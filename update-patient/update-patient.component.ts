import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.scss']
})
export class UpdatePatientComponent {
  id: number = 0;
  
  constructor(
    private route: ActivatedRoute, 
    private patientService: PatientService, 
    private router: Router) { }

  patient: Patient = new Patient();

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.patientService.getPatientById(this.id).subscribe(data => {
      this.patient = data;
    })

  }
  onSubmit() {
    this.patientService.updatePatientById(this.id, this.patient).subscribe(data => {
      console.log(data);
      this.goToDocDashBoard();
    })
  }
  goToDocDashBoard() {
    this.router.navigate(['docdashboard'])
  }
}

