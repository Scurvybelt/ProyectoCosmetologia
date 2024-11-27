import { CanActivateFn,Route, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
// import { session }

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const router:Router = inject(Router); 
  const protectedRoutes: RegExp[] = [/^\/admin$/, /^\/formulario\/?$/, /^\/formulario\/\d+$/];

  const isProtectedRoute = protectedRoutes.some((pattern) => pattern.test(state.url));
  const isAuthenticated = !!localStorage.getItem('usuario');

  return isProtectedRoute && isAuthenticated ? true : router.navigate(['/login']);
};
