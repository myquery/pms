import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {DepartmentService} from './../department.service'
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-adddepartment',
  templateUrl: './adddepartment.component.html',
  styleUrls: ['./adddepartment.component.css']
})
export class AdddepartmentComponent implements OnInit {
  createDept : FormGroup
  public departmentName : string = ''
   constructor(
     private fb: FormBuilder,
     private service : DepartmentService,
     public toastr: ToastsManager,
     vcr: ViewContainerRef) { 
        this.toastr.setRootViewContainerRef(vcr);
     }

  ngOnInit() {
    this.createDept = this.fb.group({
      departmentName : [null, Validators.required]
    })
  }

  addDept(value){
    this.service.addDepartment(value)
    .subscribe(data => {
      this.toastr.success('New added successfully', 'Success!');
    }, ()=> {
       this.toastr.error('Error occurred while adding department', 'Error!');
    })
  }



}
