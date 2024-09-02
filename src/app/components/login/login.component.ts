import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email : string = '';
  password : string = '';

  constructor(private userService:UserService,
    private router:Router
  ) { }

  login(){
    this.userService.login({email:this.email,password:this.password})
    .subscribe({
      next: (res) => {
        console.log('Login successful', res);
        this.router.navigate(['/tasks']);
      },
      error: (err) => {
        console.error('Login failed', err);
      }
    });
  }

}
