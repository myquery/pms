import { Component, OnInit } from '@angular/core';
import { DepartmentService } from './../department.service'
@Component({
  selector: 'app-listdepartment',
  templateUrl: './listdepartment.component.html',
  styleUrls: ['./listdepartment.component.css']
})
export class ListdepartmentComponent implements OnInit {
  public department: any[]
  constructor(private service : DepartmentService) { }

  ngOnInit() {
    this.getDepartment()
  }
  getDepartment(){
    this.service.getDepartment()
    .subscribe(data => {
      this.department = data

    })
  }

  removeProcurement(id){
     let okDelete = confirm('Are you sure you want remove user Account?')
     if(okDelete){
      // this.loader.start()
   this.service.deleteDepartment(id)
    .subscribe(res => {
      res
          
    })    
     } 
     this.getDepartment()
  }

}
