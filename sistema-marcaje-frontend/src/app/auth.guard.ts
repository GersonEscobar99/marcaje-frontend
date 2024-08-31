/* import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { LoginService } from './services/login.service'; // Asegúrate de que el servicio está implementado

export const authGuard: CanActivateFn = (route, state) => {
  const loginService = inject(LoginService); // Inyecta el servicio
  const router = inject(Router); // Inyecta el router

  if (loginService.isAuthenticated()) {
    return true; // Permite la navegación si el usuario está autenticado
  } else {
    router.navigate(['/login']); // Redirige al login si no está autenticado
    return false; // Bloquea la navegación
  }
};
 */

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from './marcaje/services/login.service';
import { AuthService } from './marcaje/services/Auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router, private authService: AuthService) {}

 
  canActivate(): boolean {
    if (this.loginService.isUserAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
