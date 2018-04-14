import { Component, OnInit } from '@angular/core';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';
import {ConfigservicesService} from './../../configservices.service'

@Component({
  selector: 'app-listgroup',
  templateUrl: './listgroup.component.html',
  styleUrls: ['./listgroup.component.css']
})
export class ListgroupComponent implements OnInit {
  public groups: any[]
  public delete: boolean;
  constructor(
               private loader : SlimLoadingBarService,
               public toastr: ToastsManager, 
               vcr: ViewContainerRef,
               private service : ConfigservicesService
  ) { 
     this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.getGroups()
  }

getGroups(){
      this.loader.start()
      this.service.getGroups()
        .subscribe(data => {
      this.groups = data
      }, () => {
      this.loader.complete()
      }, () => {
      this.loader.complete()
      })
  }

      removeGroup(id){
     let okDelete = confirm('Are you sure you want remove this group?')
     if(okDelete){
   this.delete = true  
   this.service.deleteProject(id)
    .subscribe(res => {
      res 
       this.delete = true   
    }, () => {

    }, ()=> {
      this.delete = false
    })    
     } 
     this.getGroups()
  }
}
