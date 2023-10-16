import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmpService } from '../emp.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

  constructor(private router: Router, private service: EmpService, private toster : ToastrService) {
    this.service.setUserLoggedOut();
    router.navigate(['login']);
    this.toster.success("LogOut Successfully !");
  }


}