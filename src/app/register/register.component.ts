import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  employee: any;
  coutriesList: any;
  departmentList: any;


  //Dependency Injection for EmpService
  constructor(private service: EmpService,private router : Router, private toster : ToastrService) {

    this.employee = {
      "empId": "",
      "empName": "",
      "salary": "",
      "gender": "",
      "doj":"",
      "country": "",
      "emailId": "",
      "password": "",
      "department": {"deptId":""}
      }
  }

  ngOnInit(){
    this.service.getCountries().subscribe((countriesData: any) => { this.coutriesList = countriesData; });
  
    this.service.getDepartments().subscribe((departmentData: any) => {
      this.departmentList = departmentData;
    });
  }


  async employeeRegister(regForm: any) {

    if(regForm.empName == "" || regForm.salary == "" || regForm.gender == ""){
      this.toster.error("Data Insufficient !");
      return;
    }else{
    console.log(regForm);

    this.employee.empName = regForm.empName;
    this.employee.salary = regForm.salary;
    this.employee.gender = regForm.gender;
    this.employee.doj = regForm.doj;
    this.employee.country = regForm.country;
    this.employee.emailId = regForm.emailId;
    this.employee.password = regForm.password;
    this.employee.department.deptId = regForm.deptId;

    this.service.employeeRegister(this.employee).subscribe((data: any) => {
      console.log(data);
    });
      this.toster.success("Register Successfully !")
      this.router.navigate(['login']);
    }
  }

}
