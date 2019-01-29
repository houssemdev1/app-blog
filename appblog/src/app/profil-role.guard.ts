import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from './data.service';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class ProfilRoleGuard implements CanActivate {
 
 info = jwt_decode(localStorage.getItem('tok'));
  user$: []
  id = localStorage.getItem('iduser');
  constructor(private router: Router, private data: DataService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log('role auth');
 
if(this.info.data.role==='user')
{
alert("vous n'avez pas le droit d'acces à cette page");
this.router.navigate(['listearticle'])
return false;
  }
  else{
   console.log("role:",this.info.data.role) ;
   return true
  }
    }}