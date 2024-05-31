import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAuthGuardService } from './admin-auth-guard.service';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { CreateMedicineComponent } from './create-medicine/create-medicine.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { DocAuthenticationGuardService } from './doc-authentication-guard.service';
import { DocdashboardComponent } from './docdashboard/docdashboard.component';
import { DocloginComponent } from './doclogin/doclogin.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MedicinelistComponent } from './medicinelist/medicinelist.component';
import { UpdateMedicineComponent } from './update-medicine/update-medicine.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { ViewPatientComponent } from './view-patient/view-patient.component';

const routes: Routes = [
    {
        path: 'admin', component: AdmindashboardComponent,canActivate:[AdminAuthGuardService]
    },
    {
        path: 'appointmentlist', component: AppointmentComponent,canActivate:[AdminAuthGuardService]
    },
    {
        path: 'create-appointment', component: CreateAppointmentComponent,canActivate:[AdminAuthGuardService]
    },
    {
        path: 'home-page', component: HomePageComponent
    },
    {
        path: '', redirectTo: 'home-page', pathMatch: 'full'
    },
    {
        path: 'docdashboard', component: DocdashboardComponent,canActivate:[DocAuthenticationGuardService]
    },
    {
        path: 'create-patient', component: CreatePatientComponent,canActivate:[DocAuthenticationGuardService]
    },
    {
        path: 'view-medicine', component: MedicinelistComponent,canActivate:[DocAuthenticationGuardService]
    },
    {
        path: 'create-medicine', component: CreateMedicineComponent,canActivate:[DocAuthenticationGuardService]
    },
    {
        path: 'update-patient/:id', component: UpdatePatientComponent,canActivate:[DocAuthenticationGuardService]
    },
    {
        path: 'view-patient/:id', component: ViewPatientComponent,canActivate:[DocAuthenticationGuardService]
    },
    {
        path: 'update-medicine/:id', component: UpdateMedicineComponent,canActivate:[DocAuthenticationGuardService]
    },
    {
        path: 'doclogin', component: DocloginComponent
    },
    {
        path: 'adminlogin', component: AdminloginComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
