import { Component, OnInit,  OnChanges } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms'
import {ActivatedRoute, Router} from '@angular/router'
import {NdeServicesService} from './../../../../nde-services.service'
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-admin-edit-users',
  templateUrl: './admin-edit-users.component.html',
  styleUrls: ['./admin-edit-users.component.css']
})
export class AdminEditUsersComponent implements OnInit, OnChanges {
  public editUser : FormGroup
  public userId : string
  public firstName  : string 
  public lastName   : string 
  public email      : string 
  public department : string 
  public position   : string 
  public password   : string 

  public userData

  public updated : boolean
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private service: NdeServicesService,
    private router : Router,
    public toastr: ToastsManager, 
              vcr: ViewContainerRef
   
  ) { 
    this.toastr.setRootViewContainerRef(vcr);
    this.userId = this.route.snapshot.paramMap.get('id');
    
      
       
    this.updated = false

     this.editUser = this.fb.group({
      firstName   : [this.firstName, Validators.required],
      lastName    : [this.lastName, Validators.required],
      department  : [this.department, Validators.required],
      position    : [this.position, Validators.required],
      email       : [this.email, Validators.required],
      password    : [this.password, Validators.required],
    
    })

     this.editUser.patchValue({
      firstName   : this.firstName,
      lastName    : this.lastName,
      department  : this.department,
      position    : this.position,
      email       : this.email,
      password    : this.password
    
    })

    this.editUser.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); 

  
  }
   editUserById(id){
     this.service.getUsersById(id)
     .subscribe(res =>{
       
       this.firstName = res.firstName
       this.lastName = res.lastName
       this.email = res.email
       this.department = res.department
       this.position  = res.position
       this.password = res.password

       this.userData = res
         console.log(this.userData);
      })
   }

  ngOnInit() {
     this.editUserById(this.userId)  

}

  ngOnChanges() {
         //set the value returned from the server
     
    
  }
   
  
   updateUser(value){
    let Data = value ? value : this.userData
     
    let id = this.userId
    this.service.updateusers(id, Data)
    .subscribe(res => {
      res
      this.toastr.success('Record updated successfully', 'Success!');
       this.router.navigate(['/admin/createusers/manageusers/listusers'])
    }, () => {
      this.toastr.error('Error occurred while updating the record', 'Error!');
      this.editUserById(this.userId)
    })
   }

   onValueChanged(data?: any) {
   // this.isValid = true
    if (!this.editUser) { return; }
    const form = this.editUser;

    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && control.dirty && !control.valid ) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }

        //this.isValid = false;
      }
    }
  }

  formErrors = {
    'firstName': '',
    'lastName': '',
    'department': '',
    'position' : '',
    'email': '',
    'password': '',
    }

  validationMessages = {
    'email': {
      'required': 'Email is required.',
     
    },
    'password': {
      'required': 'Your password is required.'
    },
    'firstName': {
      'required': 'please provide firstname.'
    },
    'lastName': {
      'required': 'Please provide lastname'
    },
     'department': {
      'required': 'Departmentis required.'
    },
     'position': {
      'required': 'Position is required.'
    }
   }
}
