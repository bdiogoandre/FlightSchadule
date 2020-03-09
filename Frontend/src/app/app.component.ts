import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './shared/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Frontend';
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ){}
  ngOnInit(){
   
  }
  logout(){
    this.authService.goLogout();
    this.router.navigate(['/login'])
  }
}
