import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {ConfigservicesService} from './../../configservices.service'
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-editprocurement',
  templateUrl: './editprocurement.component.html',
  styleUrls: ['./editprocurement.component.css']
})
export class EditprocurementComponent implements OnInit {
  procurement : FormGroup
  isValid : boolean
  private userId
   constructor(
     private fb: FormBuilder,
     public toastr: ToastsManager,
     private service : ConfigservicesService,
     private route : ActivatedRoute,
     vcr: ViewContainerRef) { 
        this.toastr.setRootViewContainerRef(vcr);
        this.userId = this.route.snapshot.paramMap.get('id');
        this.getProcurementId(this.userId)
     }

  ngOnInit() {
    this.procurement = this.fb.group({
      name : [null, Validators.required],
      description: [null, Validators.required]
    })
  }

    editProcurement(value){
    this.service.addProcurement(value)
    .subscribe(data => {
      this.toastr.success('New procurement method edited successfully', 'Success!');
    }, ()=> {
       this.toastr.error('Error occurred while editing procurement method', 'Error!');
    })
  }

  updateProcurement(value){
    let id = this.userId
    this.service.updateProcurement(id, value)
    .subscribe(res => {
      res
      this.toastr.success('Record updated successfully', 'Success!');
    })
   }

    getProcurementId(id){
     this.service.getProcurementById(id)
     .subscribe(res =>{ 
        this.procurement.patchValue({
        name  : res.name,
        description : res.description

    
    })
      
      })
   }
 //detect change on input control
   onValueChanged(data?: any) {
    
    if (!this.procurement) {
      this.isValid = false
       return; 
      }
    const form = this.procurement;

    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && control.dirty && !control.valid ) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }

        this.isValid = false;
      }
    }
  }

  formErrors = {
    'name'  : '',
    'description'   : '',
     
    }

  validationMessages = {
    'name': {
      'required': 'Name is required.'
     
    },
    'description': {
      'required': 'Please describe the procurementment.'
    }
    }
    
   

}
