import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DocauthenticationService } from './docauthentication.service';

@Injectable({
  providedIn: 'root'
})
export class DocAuthenticationGuardService implements CanActivate {

  constructor(
    private docAuthenticationService: DocauthenticationService,
    private router: Router
  ) { }
  canActivate() {
    if (this.docAuthenticationService.isUserLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['docdashboard']);
      return false;
    }
  }



}

