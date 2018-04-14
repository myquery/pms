import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {ConfigservicesService} from './../../configservices.service'
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-addprocurement',
  templateUrl: './addprocurement.component.html',
  styleUrls: ['./addprocurement.component.css']
})
export class AddprocurementComponent implements OnInit {
  procurement : FormGroup
  isValid : boolean
   constructor(
     private fb: FormBuilder,
     public toastr: ToastsManager,
     private service : ConfigservicesService,
     vcr: ViewContainerRef) { 
        this.toastr.setRootViewContainerRef(vcr);
     }

  ngOnInit() {
    this.procurement = this.fb.group({
      name : [null, Validators.required],
      description: [null, Validators.required]
    })
  }

    addProcurement(value){
    this.service.addProcurement(value)
    .subscribe(data => {
      this.toastr.success('New procurement method added successfully', 'Success!');
    }, ()=> {
       this.toastr.error('Error occurred while adding procurement method', 'Error!');
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
