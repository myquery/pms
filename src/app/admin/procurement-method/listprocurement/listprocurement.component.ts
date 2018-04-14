import { Component, OnInit } from '@angular/core';
import {ConfigservicesService} from './../../configservices.service'

@Component({
  selector: 'app-listprocurement',
  templateUrl: './listprocurement.component.html',
  styleUrls: ['./listprocurement.component.css']
})
export class ListprocurementComponent implements OnInit {
  public procurement: any[]
  constructor(private service : ConfigservicesService) { }

  ngOnInit() {
    this.getProcurement()
  }

    getProcurement(){
    this.service.getProcurement()
    .subscribe(data => {
      this.procurement = data

    })
  }

   removeUser(id){
     let okDelete = confirm('Are you sure you want remove user Method?')
     if(okDelete){
      // this.loader.start()
   this.service.deleteProcurement(id)
    .subscribe(res => {
      res
          
    })    
     } 
     this.getProcurement()
  }

}
