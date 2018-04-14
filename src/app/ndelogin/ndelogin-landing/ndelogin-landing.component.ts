import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms'
import {NdeServicesService} from './../../nde-services.service'
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
import {JwtHelper} from 'angular2-jwt'
import {Router} from '@angular/router'

@Component({
  selector: 'app-ndelogin-landing',
  templateUrl: './ndelogin-landing.component.html',
  styleUrls: ['./ndelogin-landing.component.css']
})
export class NdeloginLandingComponent implements OnInit {
 public ndelogin : FormGroup;
 public okLogin : boolean;
 public loggedIn: boolean;

  constructor(
      private fb:FormBuilder,  
      private service: NdeServicesService,
      private router : Router
       ) { 
    this.ndelogin = this.fb.group({
      username : '',
      password : ''
    })

    this.loggedIn = false
  }

  ngOnInit() {
   
  }




  loginNde(values){
    
     this.loggedIn = true
    this.service.loginAdmin(values)
    .subscribe(data => {
      let currentUser = localStorage.getItem('currentUser')
      
      //console.log(currentUser)
      this.loggedIn = true
       this.router.navigate(['/admin'], )
          console.log('is ok to login')
    
    }, () => {
      this.loggedIn = false
      console.log('An Error Occured')
    }, () => {
      this.loggedIn = false
      console.log('You are Logged in')
    })

  }

}
