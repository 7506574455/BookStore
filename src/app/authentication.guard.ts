import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthguardServiceService } from './services/authguard-service.service';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
 
  constructor(private authguardservice: AuthguardServiceService, private router: Router){}
  canActivate(): boolean {  
    if (!this.authguardservice.gettoken()) {  
        this.router.navigateByUrl("/display-login");  
    }  
    return this.authguardservice.gettoken();  
}  
  
}
