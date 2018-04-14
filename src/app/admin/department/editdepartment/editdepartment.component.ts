import { Component, OnInit } from '@angular/core';
import {DepartmentService} from './../department.service'
import {ActivatedRoute} from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms'

@Component({
  selector: 'app-editdepartment',
  templateUrl: './editdepartment.component.html',
  styleUrls: ['./editdepartment.component.css']
})
export class EditdepartmentComponent implements OnInit {
  public departmentName
  private userId
  public userData
  public createDept : FormGroup

  constructor(
    private service : DepartmentService,
    private route : ActivatedRoute,
    public toastr: ToastsManager, 
              vcr: ViewContainerRef,
    private fb : FormBuilder ) {

     this.toastr.setRootViewContainerRef(vcr);
     this.userId = this.route.snapshot.paramMap.get('id');
     this.getDepartmentId(this.userId)
   }

  ngOnInit() {
     this.createDept = this.fb.group({
      departmentName : [null, Validators.required]
     
    })

     this.createDept.patchValue({
      departmentName   : this.departmentName,

    
    })
  }

   updateDept(value){
    let Data = value ? value : this.userData
    let id = this.userId
    this.service.updateDepartment(id, Data)
    .subscribe(res => {
      res
      this.toastr.success('Record updated successfully', 'Success!');
    })
   }

    getDepartmentId(id){
     this.service.getDepartmentById(id)
     .subscribe(res =>{ 
       this.departmentName = res.departmentName
       this.userData = res
      
      })
   }

}
