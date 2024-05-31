import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Medicine } from '../medicine';
import { MedicineService } from '../medicine.service';

@Component({
  selector: 'app-medicinelist',
  templateUrl: './medicinelist.component.html',
  styleUrls: ['./medicinelist.component.scss']
})
export class MedicinelistComponent {

  medicines: Medicine[] = [];

  constructor(
    private medicineService: MedicineService,
    private router: Router
  ) {
  }
  ngOnInit(): void {
    this.getMedicine();

  }
  getMedicine() {
    this.medicineService.getMedicines().subscribe(data => {
      this.medicines = data;
    })
  }
  update(id: number) {
    this.router.navigate(['update-medicine', id])
  }
  delete(id: number) {
    this.medicineService.deleteById(id).subscribe(data => {
      console.log(data);
      this.getMedicine();
    })
  }
}
