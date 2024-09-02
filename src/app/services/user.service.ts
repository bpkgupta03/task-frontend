import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient,
    private router:Router
  ) { }

  private apiUrl = 'http://localhost:8000/api/users';

  register(user:any){
    return this.http.post(`${this.apiUrl}/register`,user);
  }

  login(credentials:any){
    return this.http.post(`${this.apiUrl}/login`,credentials);
  }

  isLoggedIn(){
    return !!localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  getToken(){
    return localStorage.getItem('token');
  }

}
