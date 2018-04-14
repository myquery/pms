import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {PositionService} from './../position.service'
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-addposition',
  templateUrl: './addposition.component.html',
  styleUrls: ['./addposition.component.css']
})
export class AddpositionComponent implements OnInit {
  createPos : FormGroup
  public title : string = ''
   constructor(
     private fb: FormBuilder,
     private service : PositionService,
     public toastr: ToastsManager,
     vcr: ViewContainerRef) { 
        this.toastr.setRootViewContainerRef(vcr);
     }

  ngOnInit() {
    this.createPos = this.fb.group({
      title : [null, Validators.required]
    })
  }

  addPosition(value){
    this.service.addPosition(value)
    .subscribe(data => {
      this.toastr.success('New added successfully', 'Success!');
    }, ()=> {
       this.toastr.error('Error occurred while adding department', 'Error!');
    })
  }



}
