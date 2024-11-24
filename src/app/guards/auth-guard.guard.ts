import { CanActivateFn,Route, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
// import { session }

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const router:Router = inject(Router); 
  const protectdRoutes:string[] = ['/admin','/formulario/:id','/formulario'];
  return protectdRoutes.includes(state.url) && localStorage.getItem('usuario') ? true : router.navigate(['/login']);
};
