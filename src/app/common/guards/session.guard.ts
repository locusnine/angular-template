import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class SessionGuard implements CanActivate {

  constructor(
    private router: Router
  ) { }

  canActivate(): boolean {
    let token = sessionStorage.getItem('token')
    return token != null;
  }

}
