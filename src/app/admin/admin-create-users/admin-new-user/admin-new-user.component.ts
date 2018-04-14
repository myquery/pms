import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NdeServicesService } from './../../../nde-services.service';
import {DepartmentService } from './../../department/department.service';
import {PositionService } from './../../position/position.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
import 'rxjs/add/operator/map'
import {Observable} from 'rxjs/Rx';


@Component({
  selector: 'app-admin-new-user',
  templateUrl: './admin-new-user.component.html',
  styleUrls: ['./admin-new-user.component.css']
})
export class AdminNewUserComponent implements OnInit, OnChanges {
  public manageUser: boolean
  public createUser: FormGroup
  public isValid: boolean
  public newUser: boolean
  public role: string
  public allUsers: any[]
  public removeMsg
  public emailExt : string
  public deptData : any[]
  public posData : any[]

  constructor(
              private router: Router,
              private fb: FormBuilder,
              private service: NdeServicesService,
              public toastr: ToastsManager, 
              vcr: ViewContainerRef,
              private loader : SlimLoadingBarService,
              private dept : DepartmentService,
              private pos : PositionService ) {
              this.toastr.setRootViewContainerRef(vcr);
  
  }

  ngOnInit() {
    this.emailExt = '@nde.gov.ng'
    this.manageUser = false
    this.role = 'admin'
    this.createUser = this.fb.group({
      firstName   : ['', Validators.required],
      lastName    : ['', Validators.required],
      department  : ['', Validators.required],
      position    : ['', Validators.required],
      email       : ['', Validators.compose([Validators.required, Validators.pattern('\\b' +this.emailExt+'\\b')])],
      password    : ['', Validators.required],
      role        : this.role
    })
    //this.createUser.get('email').valueChanges.subscribe(data =>  this.getEmail(data))
   this.createUser.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now
    this.newUser = false
    this.getUsers()
    this.getDepartment()
    this.getPosition()

      let emailcheck = this.createUser.get('email')
      
      emailcheck.valueChanges.subscribe(val => {
      let email$ = Observable.of(val);
      email$.subscribe(emailVal => {
        console.log(emailVal)
      let approvedEmail =  new RegExp('\\b' +this.emailExt+'\\b').test(emailVal)
      //let okEmailExt = ndeEmail.split('@');

      //console.log(approvedEmail)
      if(approvedEmail = false ){
       this.createUser.get('email').setValidators([Validators.required, Validators.pattern('\\b' +this.emailExt+'\\b')])
       
       }else{
        this.createUser.get('email').setValidators([Validators.required])
       }
      }

      )
      
       //this.createUser.get('email').updateValueAndValidity()
           
     })
   
   
       
  }

 ngOnChanges(){
 
 }

 //list department
 getDepartment(){
   this.dept.getDepartment()
   .subscribe(data => {
    this.deptData = data
    // console.log(this.deptData )
   })
 }

//list positions
  getPosition(){
   this.pos.getPosition()
   .subscribe(data => {
    this.posData = data
   })
 }

 //create new user account
  createUserAccount(value, e){
    console.log(value)
    if(this.isValid = false){
      this.onValueChanged() 
       e.preventDefault()
      return
      
    }else {
      
   this.service.createUsers(value)
    .subscribe(res => {
      res
      this.loader.start()
      this.getUsers()
      this.toastr.success('New added successfully', 'Success!');
     
    }, ()=>{
      this.toastr.error('Please fill all fields', 'Required');
    }, () => {
       this.router.navigate(['/admin/createusers/manageusers/listusers'])
    })
    }
  }

//detect change on input control
   onValueChanged(data?: any) {
   
    if (!this.createUser) {
       this.isValid = false;
       return;
       }
    const form = this.createUser;

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
    'firstname'  : '',
    'lastname'   : '',
    'department' : '',
    'position'   : '',
    'email'      : '',
    'password'   : '',
    }

  validationMessages = {
    'email': {
      'required': 'Email is required.',
      'pattern' : 'Email must contain @nde.gov.ng'
     
    },
    'password': {
      'required': 'Your password is required.'
    },
    'firstname': {
      'required': 'please provide firstname.'
    },
    'lastname': {
      'required': 'Please provide lastname'
    },
     'department': {
      'required': 'Departmentis required.'
    },
     'position': {
      'required': 'Position is required.'
    }
   }

//get all users
   getUsers(){
     this.service.getUsers()
     .subscribe(res => {
       this.allUsers =  res;
      })
   }

}
