import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {NdeServicesService} from './../../../../nde-services.service'
import {FormGroup, FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-admin-assign-roles',
  templateUrl: './admin-assign-roles.component.html',
  styleUrls: ['./admin-assign-roles.component.css']
})
export class AdminAssignRolesComponent implements OnInit {
  public userId
  public usrDetail
  public fname
  public lname
  public email
  public roles : FormGroup
  constructor(
        private route : ActivatedRoute, 
        private service : NdeServicesService,
        private fb : FormBuilder) {
          
    this.userId = this.route.snapshot.paramMap.get('id');
    this.getUserById(this.userId)

  }

   getUserById(id){
     this.service.getUsersById(id)
     .subscribe(res =>{ 
       console.log(res);
       this.fname = res.firstName
       this.lname = res.lastName
       this.email = res.email
      })

   }
  ngOnInit() {

    this.roles = this.fb.group({
      awardletter : '',
      contractors : '',
      consultants : '',
      newproject  : '',
      newuser     : '',
      description : ''

    })
  }

  assignRole(value){
    console.log(value)

  }

}
