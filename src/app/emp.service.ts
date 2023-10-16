import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
  

  isUserLogged: boolean;
  loginStatus: any;

  //Dependency Injection for HTTPClient
  constructor(private http: HttpClient) {
    this.isUserLogged = false;
    this.loginStatus = new Subject();
  }

  getCountries(): any {
    return this.http.get('https://restcountries.com/v3.1/all');
  }
  getEmployees(): any {
    return this.http.get('http://localhost:8085/getEmployees');
  }
  getEmpById(empId: any): any {
    return this.http.get('http://localhost:8085/getEmployeeById/' + empId);
  }
  employeeRegister(employee: any) {
    return this.http.post('registerEmployee', employee);
  }
  getDepartments(): any {
    return this.http.get('getDepartments');
  }
  deleteEmployee(empId: any) {
    return this.http.delete('deleteEmployeeById/' + empId);
  }
  updateEmployee(employee: any) {
    return this.http.put('updateEmployee', employee);
  }
  empLogin(employee: any) {
    return this.http.get('empLogin/' + employee.emailId + "/" + employee.password).toPromise();
  }
//   async CheckOtp(email:any){
//     await axios.get(CheckEmail/+email).then(data=>{
//        console.log(data.data,"getrdxh");
//        return data.data
//      })
//  }
//  async PutPass(Email: any, otp: any, Npass: any){
//    await axios.put(http://localhost:4200/UpdatePass/+Email+/+otp +/+Npass ).then(data=>{
//      console.log(data.data,"getrdxh");
//      return data.data
//     })
//   }




  //Successfully Logged In
  setUserLoggedIn() {
    this.isUserLogged = true;
  }

   //Logout
  setUserLoggedOut() {
    this.isUserLogged = false;
  }

  getUserLoggedStatus(): boolean {
    return this.isUserLogged;
  }


  forgotPassword(email: string) {
    return this.http.post('http://localhost:8085/forgotPassword', { email });
  }


  verifyOtp(email: string, otp: string): Observable<any>{
    return this.http.post(`validateEmailOtp/${email}/${otp}`, {});
  }

  sendOtp(emailId: string): Observable<any>{
    console.log("This is test " +emailId);
    return this.http.post('emailotp', {emailId:emailId});
  }

  setPasswordByPhone(phoneNo: string, password: string): Observable<any> {
    return this.http.put(`setPasswordByPhone/${phoneNo}/${password}`, {});
  }

  verifyPhoneOtp(phoneNo: string, otp: number): Observable<any> {
    return this.http.post(`validatePhoneOtp/${phoneNo}/${otp}`, {});
  }

  sendPhoneOtp(phoneNo: string): Observable<any> {
    return this.http.post(`phoneOtp/${phoneNo}`, {});
  }

  setPassword(emailId: string, password: string): Observable<any> {
    return this.http.put('setPassword', { emailId: emailId, password: password });
  }
}
