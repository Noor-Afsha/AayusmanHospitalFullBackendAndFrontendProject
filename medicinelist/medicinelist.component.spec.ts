import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicinelistComponent } from './medicinelist.component';

describe('MedicinelistComponent', () => {
  let component: MedicinelistComponent;
  let fixture: ComponentFixture<MedicinelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicinelistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicinelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
