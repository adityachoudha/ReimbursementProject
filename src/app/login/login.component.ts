import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmpService } from '../emp.service';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  employees: any;
  employee: any;

  currentStep: 'email' | 'otp';
  emailId = "";
  password = "";
  continuePassword: boolean = false;

  //Dependency Injection for Router, EmpService
  constructor(private router: Router, private service: EmpService, private toster : ToastrService , private http: HttpClient) {
    this.currentStep = 'email';

  }

  changeToOtp(){
    this.continuePassword = !this.continuePassword;
  }

  displayPassword() {
    this.continuePassword = !this.continuePassword;
  }

  signUp() {
    this.router.navigate(['register']);
  }

  verifyEmail(loginForm: any){
    this.emailId = loginForm.emailId;
    
    this.service.sendOtp(loginForm.emailId).subscribe(response => {
      if(response.message === "OTP is sent"){
        this.toster.success("OTP Sent");
        this.currentStep = 'otp';
      }else{
        console.log(response.message);
        this.toster.error("Invalid Email", "Failed");
      }
    });
  }

  verifyOtp(otpForm: any) {
    this.service.verifyOtp(this.emailId, otpForm.otp).subscribe(response => {
      if (response.message === "OTP") {
        // this.toster.success("Login Sucess");
        this.router.navigate(['home']);
        console.log("please navigate to home");
      } else {
        this.toster.error("Invalid OTP", "Failed");
      }
    });
  }

  forgotPassword(){
    // this.toster.success("Fuck Off!!🖕 It's Your Problem ")
   
    this.router.navigate(['forgot-password']);
  }

  async validateLogin(loginForm: any) {
    console.log(loginForm);
   
    localStorage.setItem("emailId", loginForm.emailId);

    if (loginForm.emailId == "HR" && loginForm.password == "HR") {
      this.service.setUserLoggedIn();
      this.router.navigate(['reimbursement']);
      this.toster.success("Login Success !");
    } else {

      await this.service.empLogin(loginForm).then((data: any) => {
        console.log(data);
        this.employee = data;
      });

      if (this.employee != null) {
        this.service.setUserLoggedIn();
        this.router.navigate(['reimbursement']);
        this.toster.success("Login Success !");
      } else {
       this.toster.error("Invalid Credentials"); 
      }
    }
  }
}
