import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from "../authservice.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private router: Router, private authService: AuthserviceService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login() {
    if (!this.loginForm.valid)
      return;
    this.authService.authenticate(this.loginForm.value).subscribe(data => {
      console.log(data);
      localStorage.setItem("userId",data.id);
      localStorage.setItem("token",data.token);
      localStorage.setItem("userRole",data.roleName);
      if (data.roleName == "Mentor") {
        this.router.navigateByUrl("/mentor")
      }
    }, (error) => {

    })


  }
  signup() {
    this.router.navigateByUrl("/signup")
  }

}
