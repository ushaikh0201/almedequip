import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    public isLoggedIn: boolean = false;
    public redirectUrl: string;
    public loggedInGeneralUser: any;

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('loggedInGeneralUser')) {
             // logged in so return true
            return true;
        }

         // not logged in so redirect to login page with the return url
         this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
         return false;
    }

    
}
