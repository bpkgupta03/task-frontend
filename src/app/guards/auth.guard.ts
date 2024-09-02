import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private userService:UserService,
    private router:Router
  ) { }

  canActivate():boolean{
    if(this.userService.isLoggedIn())
        return true;
    
    this.router.navigate(['/login']);
    return false;
  }
}
