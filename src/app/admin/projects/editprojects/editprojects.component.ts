import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ConfigservicesService} from './../../configservices.service'
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {DepartmentService} from './../../department/department.service'

@Component({
  selector: 'app-editprojects',
  templateUrl: './editprojects.component.html',
  styleUrls: ['./editprojects.component.css']
})
export class EditprojectsComponent implements OnInit {

  public procurementMethod : any[]
  public project : FormGroup;
  public projectGroup : any[]
  public departmentLabel : any[]
  public projectId
  public isValid: boolean;

  constructor(
      private service : ConfigservicesService,
      private fb: FormBuilder,
      private route: ActivatedRoute,
      public toastr: ToastsManager,
      private router : Router,
      private deptservice : DepartmentService,
              vcr: ViewContainerRef
  ) { 
      this.toastr.setRootViewContainerRef(vcr);
      this.projectId = this.route.snapshot.paramMap.get('id');
  }


  ngOnInit() {
    this.getProcurement()
    this.getGroups()
    this.getDepartment()
    this.updateProjectById(this.projectId )

      this.project = this.fb.group({
      title : ['', Validators.required ],
      lotNumber : '',
      department: '',
      description : '',
      approvalThreshold: ['', Validators.required],
      procurementMethod : ['', Validators.required],
      group : ['', Validators.required],
      bidOpeningDate: ['', Validators.required],
      bidEvaluationReportDate : '',
      budgetaryProvision : ''
    })

      this.project.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); 
  }

  updateProjectById(id){
    this.service.getProjectById(id)
    .subscribe(data => {
      console.log(data)
      this.project.patchValue({
      title : data.title,
      lotNumber : data.lotNumber,
      department : data.department,
      description : data.description,
      approvalThreshold : data.approvalThreshold,
      procurementMethod : data.procurementMethod,
      group: data.group,
      bidOpeningDate : data.bidOpeningDate,
      bidEvaluationReportDate: data.bidEvaluationReportDate,
      budgetaryProvision: data.budgetaryProvision
      
      })

     

    })
  }

getProcurement(){
  this.service.getProcurement()
  .subscribe( data => {
    console.log(data)
    this.procurementMethod = data})
}

getGroups(){
  this.service.getGroups()
  .subscribe( data => {
    console.log(data)
    this.projectGroup = data})
}

getDepartment(){
  this.deptservice.getDepartment()
  .subscribe(data => {
    this.departmentLabel = data
  })
}
 updateProject(value){
    let id = this.projectId
    this.service.updateProject(id, value)
    .subscribe(res => {
     res
     this.toastr.success('Record updated successfully', 'Success!');
     this.router.navigate(['/admin/projects/listprojects'])
    })
   }
  //detect change on input control
   onValueChanged(data?: any) {
    
    if (!this.project) {
      this.isValid = false
       return; 
      }
    const form = this.project;

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
    'title'  : '',
    'approvalThreshold'   : '',
    'procurementMethod' : '',
    'group' :'',
    'bidOpeningDate': ''
   
    }

  validationMessages = {
    'title': {
      'required': 'Ttile is required.'
     
    },
    'approvalThreshold': {
      'required': 'provide approval threshold.'
    },
    'procurementMethod': {
      'required': 'please provide procurment method.'
    },
    'group': {
      
        'required': 'Please enter project group'
    },
    'bidOpeningDate': {
        'required': 'please provide bid opening date'
      },
      
     
   
    
   }


}
