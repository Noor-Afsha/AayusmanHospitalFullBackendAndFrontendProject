import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';
import { DocdashboardComponent } from './docdashboard/docdashboard.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { MedicinelistComponent } from './medicinelist/medicinelist.component';
import { CreateMedicineComponent } from './create-medicine/create-medicine.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { ViewPatientComponent } from './view-patient/view-patient.component';
import { UpdateMedicineComponent } from './update-medicine/update-medicine.component';
import { DocloginComponent } from './doclogin/doclogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';

@NgModule({
  declarations: [
    AppComponent,
    AdmindashboardComponent,
    AppointmentComponent,
    CreateAppointmentComponent,
    HomePageComponent,
    DocdashboardComponent,
    CreatePatientComponent,
    MedicinelistComponent,
    CreateMedicineComponent,
    UpdatePatientComponent,
    ViewPatientComponent,
    UpdateMedicineComponent,
    DocloginComponent,
    AdminloginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    FormsModule
    
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
