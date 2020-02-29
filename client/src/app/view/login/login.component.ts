import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: any;
  password: any;

  users: [
    {name: 'Anuj', pass: '1234'},
    {name: 'Danish', pass: '1234'},
    {name: 'Mohit', pass: '1234'},
    {name: 'Anil', pass: '1234'},
    {name: 'Ron', pass: '1234'},
  ]

  constructor(private route: Router) { }

  ngOnInit() {
  }

  onSubmit(loginForm: NgForm) {
    if(loginForm.value.username === "admin" && loginForm.value.password === "admin"){
     this.route.navigateByUrl('/adminDashboard')
    } else if (loginForm.value.username === "anuj" && loginForm.value.password === "1234" || loginForm.value.username === "danish" && loginForm.value.password === "1234" || loginForm.value.username === "mohit" && loginForm.value.password === "1234") {
      this.route.navigateByUrl('/dashboard')
    } 
    else {
      alert("Incorrect username and password")
    }
  }

  onRegister(){
    this.route.navigateByUrl("/register")
  }
}
