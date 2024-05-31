import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocdashboardComponent } from './docdashboard.component';

describe('DocdashboardComponent', () => {
  let component: DocdashboardComponent;
  let fixture: ComponentFixture<DocdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
