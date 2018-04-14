import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ConfigservicesService} from './../../configservices.service'
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editgroup',
  templateUrl: './editgroup.component.html',
  styleUrls: ['./editgroup.component.css']
})
export class EditgroupComponent implements OnInit {
  public groups : FormGroup;
  public groupId
  public isValid: boolean
  constructor(   private service : ConfigservicesService,
      private fb: FormBuilder,
      private route: ActivatedRoute,
      public toastr: ToastsManager,
      private router : Router,
              vcr: ViewContainerRef) { 
      this.toastr.setRootViewContainerRef(vcr);
      this.groupId = this.route.snapshot.paramMap.get('id');
              }

      updateGroupById(id){
        this.service.getGroupById(id)
        .subscribe(data => {
          this.groups.patchValue({
            name : data.name,
            label : data.label,
            financialYear: data.financialYear,
            description: data.description

          })
        })

      }

   ngOnInit() {
     this. updateGroupById(this.groupId)
    this.groups = this.fb.group({
      name : ['', Validators.required],
      label : ['', Validators.required],
      financialYear : ['', Validators.required],
      description: '',

    })

     this.groups.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); 
  }


 updateGroup(value){
    let id = this.groupId
    this.service.updateGroup(id, value)
    .subscribe(res => {
     res
     this.toastr.success('Record updated successfully', 'Success!');
     this.router.navigate(['/admin/groups/listgroups'])
    })
   }

//detect change on input control
   onValueChanged(data?: any) {
    
    if (!this.groups) {
      this.isValid = false
       return; 
      }
    const form = this.groups;

    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);
      //const controlObj = form.get(field);
      //form.get(field.child) 

      if (control && control.dirty && !control.valid ) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }

        this.isValid = false;
      }
    }
  }




  formErrors = {
    'name'  : '',
    'label'   : '',
    'financialYear' : '',
     
    }

  validationMessages = {
    'name': {
      'required': 'Name is required.'
     
    },
    'label': {
      'required': 'provide project label'
    },
    'financialYear': {
      'required': 'please provide Project financial year'
    }   
     
   
    
   }

}
