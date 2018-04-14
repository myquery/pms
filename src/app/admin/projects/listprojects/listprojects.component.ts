import { Component, OnInit } from '@angular/core';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';
import {ConfigservicesService} from './../../configservices.service'


@Component({
  selector: 'app-listprojects',
  templateUrl: './listprojects.component.html',
  styleUrls: ['./listprojects.component.css']
})
export class ListprojectsComponent implements OnInit {
  public projects: any[]
  public delete: boolean;
  constructor( private loader : SlimLoadingBarService,
               public toastr: ToastsManager, 
               vcr: ViewContainerRef,
               private service : ConfigservicesService) { 
              this.toastr.setRootViewContainerRef(vcr);
              }

  ngOnInit() {
    this.getProjects()
  }


 getProjects(){
      this.loader.start()
      this.service.getProjects()
        .subscribe(data => {
          console.log(data)
              this.projects = data
      
      
      }, () => {
      this.loader.complete()
      }, () => {
      this.loader.complete()
      })
  }

    removeProject(id){
     let okDelete = confirm('Are you sure you want remove this Projects?')
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
     this.getProjects()
  }

}
