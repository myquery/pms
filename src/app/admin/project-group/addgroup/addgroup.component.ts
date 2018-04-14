import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ConfigservicesService} from './../../configservices.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';
import {DepartmentService} from './../../department/department.service'

@Component({
  selector: 'app-addgroup',
  templateUrl: './addgroup.component.html',
  styleUrls: ['./addgroup.component.css']
})
export class AddgroupComponent implements OnInit {
public groups : FormGroup;
private isValid : boolean

  constructor(  private service : ConfigservicesService,
    public fb : FormBuilder,
    public toastr: ToastsManager,
    private router : Router,
     vcr: ViewContainerRef) {
       this.toastr.setRootViewContainerRef(vcr);
      }

  ngOnInit() {
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

addGroup(value, e){
        if(this.isValid = false){
      this.onValueChanged() 
       e.preventDefault()
      return
      
    }else {
  this.service.addGroup(value)
  .subscribe(data => {
    this.toastr.success('New Group added successfully', 'Success!');
    this.router.navigate(['/admin/groups/listgroups'])
  }, ()=> {
     this.toastr.error('Error adding group', 'Success!');
  }, ()=>{
    this.toastr.success('New Group added successfully', 'Success!');
  })

    }

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
