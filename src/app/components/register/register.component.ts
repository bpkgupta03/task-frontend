import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = { username: '', email: '', password: '' };

  constructor(private userService: UserService, 
    private router: Router) {}

  onRegister() {
    this.userService.register(this.user).subscribe(
      () => this.router.navigate(['/login']),
      (error:any) => console.error('Registration error', error)
    );
  }
}
