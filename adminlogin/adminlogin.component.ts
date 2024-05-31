import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AdminauthenticationService } from '../adminauthentication.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss']
})
export class AdminloginComponent {

  username: string = '';
  password: string = '';
  inValidLogin = false;

  constructor(
    private adminauthenticationService:AdminauthenticationService,
    private router:Router
  ){}

  checkLogin(){
    if(this.adminauthenticationService.authenticate(this.username,this.password)){
      this.router.navigate(['admin'])
      this.inValidLogin=false;
    }else{
      this.inValidLogin=true;
      alert("Wrong Credentials");
      this.router.navigate(['home-page'])
    }
  }
}
