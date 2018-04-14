import { Injectable }     from '@angular/core';
import { CanActivate, Router}    from '@angular/router';

@Injectable()
export class NdeAuthGuardService implements CanActivate {
   constructor( private router: Router) {}

  canActivate(): boolean {

    let userId = localStorage.getItem('nde-token')
    // logged in so return true
    if (userId) { return true; }
    
     // not logged in so redirect to login page
    this.router.navigate(['/login']);
    return false;
  }

}
