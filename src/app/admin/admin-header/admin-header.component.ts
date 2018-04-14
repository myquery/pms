import { Component, OnInit } from '@angular/core';
import {NdeServicesService} from './../../nde-services.service'
@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {
public userFname
public userLname
  constructor(private service : NdeServicesService) { }

  ngOnInit() {
    let userData = JSON.parse(localStorage.getItem('currentUser'))
    this.userFname = userData.firstName
    this.userLname = userData.lastName
  }
logoutUser(){
  this.service.logout()
}


}
