import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CompanyService} from './../company.service';
//import {}
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './addcompany.component.html',
  styleUrls: ['./addcompany.component.css']
})

export class AddcompanyComponent implements OnInit {
  createCoy : FormGroup;
  public isValid: boolean;
  public name: string;
  public tin: string;
  public registrationNumber: string;
  public contactInfo : {
    street1 : string,
    street2 : string,
    city: string,
    state: string,
    country: string,
    email: string,
    phone: string,
    website: string
  }

  public contactPerson : {
    fullName: string,
    jobTitle: string,
    email: string,
    phone: string,
    extension: string
  }

   constructor(
     private fb: FormBuilder,
     private service : CompanyService,
     public toastr: ToastsManager,
     private router : Router,
     vcr: ViewContainerRef) { 
        this.toastr.setRootViewContainerRef(vcr);
     }

  ngOnInit() {
    this.createCoy = this.fb.group({
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

    this.createCoy.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now
  }

  addCompany(value, e){
      if(this.isValid = false){
      this.onValueChanged() 
       e.preventDefault()
      return
      
    }else {
    this.service._addCompany(value)
    .subscribe(data => {
      console.log('am here')

      this.toastr.success('New Company added successfully', 'Success!');
      this.router.navigate(['/admin/createcompany/listcompany'])
    }, ()=> {
      //console.log(res)
       this.toastr.error('Error occurred while adding company', 'Error!');
    }, () => {
       this.toastr.success('New Company added successfully', 'Success!');
    })
    }
  }

  //detect change on input control
   onValueChanged(data?: any) {
    
    if (!this.createCoy) {
      this.isValid = false
       return; 
      }
    const form = this.createCoy;

    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);
      //const controlObj = form.get(field);
      //form.get(field.child) 

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
