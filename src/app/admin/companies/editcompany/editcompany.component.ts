import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {CompanyService} from './../company.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {Companies} from './../../model/companies.model'
@Component({
  selector: 'app-editcompany',
  templateUrl: './editcompany.component.html',
  styleUrls: ['./editcompany.component.css']
})
export class EditcompanyComponent implements OnInit {
public editCoy : FormGroup

public coyId: string

public isValid: boolean

public coyData : Companies

  constructor(
      private service : CompanyService,
      private fb: FormBuilder,
      private route: ActivatedRoute,
      public toastr: ToastsManager,
      private router : Router,
              vcr: ViewContainerRef) { 
  this.toastr.setRootViewContainerRef(vcr);
  this.coyId = this.route.snapshot.paramMap.get('id');
   

   this.editCoy = this.fb.group({
      name : ['', Validators.required],
      tin: ['', Validators.required],
      registrationNumber: ['', Validators.required],
      contactInfo : this.fb.group({
        street1 : ['', Validators.required],
        street2 : '',
        city: ['', Validators.required],
        state: ['', Validators.required],
        country: ['', Validators.required],
        email: '',
        phone: '',
        website: ''
      }),
      contactPerson : this.fb.group({
        fullName: ['', Validators.required],
        jobTitle: ['', Validators.required],
        email: '',
        phone: '',
        extension: ''
      })
    })

   this.editCoy.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); 

    }
 

  updateCompanyById(id){
    this.service.getCompanyById(id)
    .subscribe(data => {
      console.log(data)
      this.editCoy.patchValue({
      name : data.name,
      tin : data.tin,
      registrationNumber :data.registrationNumber,
      contactInfo : {
        street1 : data.contactInfo.street1,
        street2 : data.contactInfo.street2,
        city    : data.contactInfo.city,
        state   :  data.contactInfo.state,
        country : data.contactInfo.country,
        email   : data.contactInfo.email,
        phone   : data.contactInfo.phone,
        website : data.contactInfo.website

      },
      contactPerson : {
        fullName :  data.contactPerson.fullName,
        jobTitle :  data.contactPerson.jobTitle,
        email    :  data.contactPerson.email,
        phone    :  data.contactPerson.phone,
        extension:  data.contactPerson.extension
      }
      
      })

      this.coyData = data

    })
  }

  ngOnInit() {
    this.updateCompanyById(this.coyId)  
   }

   updateCompany(value){
    let id = this.coyId
    this.service.updateCompany(id, value)
    .subscribe(res => {
     res
     this.toastr.success('Record updated successfully', 'Success!');
     this.router.navigate(['/admin/createcompany/listcompany'])
    })
   }

  //detect change on input control
   onValueChanged(data?: any) {
    this.isValid = true
    if (!this.editCoy) { return; }
    const form = this.editCoy;

    for (const field in this.formErrors) {
      
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && control.dirty && !control.valid ) {
        const messages = this.validationMessages[field];
        if( typeof Object.keys(this.validationMessages[field]) === 'object'){
          for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
        }else {
          for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
        }

        this.isValid = false;
      }
    }
  }

  formErrors = {
    'name'  : '',
    'tin'   : '',
    'registrationNumber' : '',
    'contactInfo' : {
      'street1' : '',
      'city' : '',
      'state' : '',
      'country': ''
     },
    'contactPerson': {
      'fullName': '',
      'jobTitle': ''
  
    }
   
    }

  validationMessages = {
    'name': {
      'required': 'Name is required.'
     
    },
    'tin': {
      'required': 'Your Tin number is required.'
    },
    'registrationNumber': {
      'required': 'please provide company registration name.'
    },
    'contactInfo': {
      'street1': {
        'required': 'Please provide your office address'
      },
      'city': {
        'required': 'your city is required'
      },
      'state': {
        'required' : 'your state is required'
      },
      'country': {
        'required': 'your country is required'
      },
      },
     'contactPerson': {
      'fullName': {
        'required' : 'Please provide your fullname'
      },
      'jobTitle': {
        'required': 'Please provide your job title'
      }
    }
    
   }


}
