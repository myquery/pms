import { Component, OnInit } from '@angular/core';
import { CompanyService } from './../company.service';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-listcompany',
  templateUrl: './listcompany.component.html',
  styleUrls: ['./listcompany.component.css']
})
export class ListcompanyComponent implements OnInit {
  public companies: any[]
  public delete: boolean;
  constructor(
    private service : CompanyService,
    private loader : SlimLoadingBarService,
    public toastr: ToastsManager, 
              vcr: ViewContainerRef) { 
              this.toastr.setRootViewContainerRef(vcr);
              }

  ngOnInit() {
    this.delete = false
    this.getCompany()
  }

 getCompany(){
      this.loader.start()
      this.service.getCompany()
        .subscribe(data => {
      this.companies = data
      }, () => {
      this.loader.complete()
      }, () => {
      this.loader.complete()
      })
  }

    removeCompany(id){
     let okDelete = confirm('Are you sure you want remove user Account?')
     if(okDelete){
   this.delete = true  
   this.service.deleteCompany(id)
    .subscribe(res => {
      res 
       this.delete = true   
    }, () => {

    }, ()=> {
      this.delete = false
    })    
     } 
     this.getCompany()
  }
}
