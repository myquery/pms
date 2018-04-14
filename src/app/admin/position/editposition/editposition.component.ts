import { Component, OnInit } from '@angular/core';
import {PositionService} from './../position.service'
import {ActivatedRoute} from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms'

@Component({
  selector: 'app-editposition',
  templateUrl: './editposition.component.html',
  styleUrls: ['./editposition.component.css']
})
export class EditpositionComponent implements OnInit {
  public title
  private userId
  public posData
  public createPos : FormGroup

  constructor(
    private service : PositionService,
    private route : ActivatedRoute,
    public toastr: ToastsManager, 
              vcr: ViewContainerRef,
    private fb : FormBuilder ) {

     this.toastr.setRootViewContainerRef(vcr);
     this.userId = this.route.snapshot.paramMap.get('id');
     this.getPositionId(this.userId)
   }

  ngOnInit() {
     this.createPos = this.fb.group({
      title : [null, Validators.required]
     
    })

     this.createPos.patchValue({
      title  : this.title

    
    })
  }

   updatePositon(value){
    let Data = value ? value : this.posData
    let id = this.userId
    this.service.updatePosition(id, Data)
    .subscribe(res => {
      res
      this.toastr.success('Record updated successfully', 'Success!');
    })
   }

    getPositionId(id){
     this.service.getPositionById(id)
     .subscribe(res =>{ 
       this.title = res.title
       this.posData = res
      
      })
   }

}
