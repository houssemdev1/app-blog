import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  [x: string]: any;
  id = localStorage.getItem('iduser');
  constructor(private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
     
      console.log('AuthGuard#canActivate called');
      if (this.id) {
        // logged in so return true
        return true;
    }
    else {
    
      this.router.navigate(['login'])
      return false
    }
    
  }
}
