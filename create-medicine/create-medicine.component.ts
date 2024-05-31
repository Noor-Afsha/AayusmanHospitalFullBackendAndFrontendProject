import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Medicine } from '../medicine';
import { MedicineService } from '../medicine.service';

@Component({
  selector: 'app-create-medicine',
  templateUrl: './create-medicine.component.html',
  styleUrls: ['./create-medicine.component.scss']
})
export class CreateMedicineComponent {

  medicine: Medicine = new Medicine();

  constructor(private medicineService: MedicineService, private router:Router) { }

  saveMedicine() {
    this.medicineService.createMedicine(this.medicine).subscribe(data => {
      console.log(data);
      this.goToViewMedicine();
    })
  }
  onSubmit() { 
    this.saveMedicine();
  }
  goToViewMedicine(){
    this.router.navigate(['/view-medicine'])
  }
}
