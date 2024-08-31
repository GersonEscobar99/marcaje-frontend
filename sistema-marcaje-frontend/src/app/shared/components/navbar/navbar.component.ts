import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/marcaje/services/login.service';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(public loginService: LoginService,
              private router: Router){}

  onLogout(){
    this.loginService.logout();
  }

  logout(){
    this.loginService.logout();
    this.router.navigate(['/home']);
  }

}
