import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reimbursement',
  templateUrl: './reimbursement.component.html',
  styleUrls: ['./reimbursement.component.css']
})
export class ReimbursementComponent {

  billsDetails: any;
  imageUploaded: boolean = false;
  public userImage : any = File;

 

  constructor(private toastr : ToastrService,private router : Router, private sanitizer: DomSanitizer){
    this.billsDetails = {
      "fullname": "",
      "billNo": "",
      "gst": "",
      "amount": "",
      "file":{
        file: null,
        url: null
      }
    }
  }


  

  onSelectFile(event: any){
    try {
      const file = event.target.files[0];
      if (file) {
        this.userImage = file;
        const fileHandle: FileHandel = {
          file: file,
          url: this.sanitizer.bypassSecurityTrustUrl(
            window.URL.createObjectURL(file)
          )
        };
        this.billsDetails.file = fileHandle;
        this.imageUploaded = true;
        console.log(this.billsDetails);
      }
    } catch (error) {
      console.error(error);
    }
  }

  getDetails(reimbForm: any){
    if(reimbForm.name == "" || reimbForm.billNo == "" || reimbForm.gst == "" || reimbForm.amount == "" ||  this.userImage == null){
      this.toastr.error("Invalid Details");
      return ;
    }else{
      this.billsDetails.fullname = reimbForm.fullname;
      this.billsDetails.billNo = reimbForm.billNo;
      this.billsDetails.gst = reimbForm.gst;
      this.billsDetails.amount = reimbForm.amount;
  
      this.toastr.success("Bill Saved Sucessfully!!");
    }
  }

}

interface FileHandel{
  file: File,
  url: SafeUrl
}
