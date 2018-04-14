import { Component, OnInit } from '@angular/core';
import {NdeServicesService} from './../../../../nde-services.service'
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';

@Component({
  selector: 'app-admin-list-users',
  templateUrl: './admin-list-users.component.html',
  styleUrls: ['./admin-list-users.component.css']
})
export class AdminListUsersComponent implements OnInit {
public allUsers : any[]
  constructor(
    private service : NdeServicesService,
    private loader : SlimLoadingBarService
   ) {   
     
     this.getUsers() 
    }

  ngOnInit() {
   this.loadIndicator()
  }

  loadIndicator(){
    
  }
    getUsers(){
    this.loader.start() 
     this.service.getUsers()
     .subscribe(res => {
       this.allUsers =  res;
     
    }, () => {
      this.loader.stop()
    }, () => {
      this.loader.complete()
    })
   
   }
   removeUser(id){
     let okDelete = confirm('Are you sure you want remove user Account?')
     if(okDelete){
      // this.loader.start()
   this.service.deleteUser(id)
    .subscribe(res => {
      res
      
      
    })    
     } 
     this.getUsers()
  }

}
