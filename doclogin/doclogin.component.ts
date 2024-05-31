import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { DocauthenticationService } from '../docauthentication.service';

@Component({
  selector: 'app-doclogin',
  templateUrl: './doclogin.component.html',
  styleUrls: ['./doclogin.component.scss']
})
export class DocloginComponent {

  username:string='';
  password:string='';

  invalidLogin=false;

  constructor(
    private router:Router,
    private docauthenticationService:DocauthenticationService
  ){}

  checkLogin(){

    if(this.docauthenticationService.authenticate(this.username,this.password)){
      this.router.navigate(['docdashboard'])
      return this.invalidLogin=false;
    }
    else{
      alert("Wrong Credentials");
      this.router.navigate(['home-page']);
      return this.invalidLogin=true;
    
    }
  }
}
