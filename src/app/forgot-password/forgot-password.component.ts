import { Component } from '@angular/core';
import { EmpService } from '../emp.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
//   OtpRetrival : any=false;
//   resHar:any;
//   DoneCheck: any;
//   inputData: string = '';
//   inputemail: string='';
//   inputpassword:string='';
//   inputOtp:any=null;
//   resPass:any;
//   constructor(private router: Router, private service: EmpService) {

//     //Delete All the Employee Hardcoded JSON objects

//   }
//   Getotp(){
//     console.log("inside", this.inputemail);
//      this.resHar=this.service.CheckOtp(this.inputemail)
//      console.log("res", this.resHar);
//      this.OtpRetrival=this.resHar;
//   }
//   async CrossCheckEmail(){
//     this.resPass=this.service.PutPass(this.inputemail,this.inputOtp,this.inputpassword)
//     if (this.resPass){
//       this.DoneCheck=true;
//       this.router.navigate(['/home']);
//     }else{
//       alert("Enter correct otp")
//     }
//    
//   }

}

