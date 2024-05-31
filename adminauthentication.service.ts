import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminauthenticationService {

  constructor() { }

//simple method to login with application but issue is that after the login able to login
//with any url so logged in method and logout method is develped.
  authenticate(username2:string,password:string){
    if(username2=='Admin2' && password=='Password@123'){
      sessionStorage.setItem('username2',username2);
      return true;
    }
    else{
      return false
    }

  }
  //check whether the user is logged in r not?
  isUserLoggedIn(){
    console.log("User is logged in ");
    let user=sessionStorage.getItem('username2');
    return !(user==null);
  }
  logout(){
    console.log("User is logout");
    sessionStorage.removeItem('username2');
  }
}
