import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocauthenticationService {

  constructor() { }

  authenticate(username: string, password: string) {
    if (username == "Admin1" && password == "Password@123") {
      sessionStorage.setItem('username', username);
      return true;
    }
    else {
      return false
    }
  }

  isUserLoggedIn(){
    console.log("Doc logged in");
    let user=sessionStorage.getItem('username');
    return !(user==null);
  }
  logout(){
    console.log("Doc logout");
    sessionStorage.removeItem('username');
  }
}
