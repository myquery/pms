import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ConfigservicesService} from './../../configservices.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';
import {DepartmentService} from './../../department/department.service'

@Component({
  selector: 'app-addprojects',
  templateUrl: './addprojects.component.html',
  styleUrls: ['./addprojects.component.css']
})
export class AddprojectsComponent implements OnInit {
  public procurementMethod : any[]
  public project : FormGroup;
  isValid : boolean
  public projectGroup : any[]
  public departmentLabel : any[]


  constructor(
    private service : ConfigservicesService,
    public fb : FormBuilder,
    public toastr: ToastsManager,
    private router : Router,
    private deptservice : DepartmentService,
     vcr: ViewContainerRef) { 
        this.toastr.setRootViewContainerRef(vcr);
     }
  ngOnInit() {
    
    this.getProcurement()
    this.getGroups()
    this.getDepartment()

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
      budgetaryProvision : ['', Validators.required]
    })

      this.project.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); 
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
  addProject(value, e){
      if(this.isValid = false){
      this.onValueChanged() 
       e.preventDefault()
      return
      
    }else {
    this.service.addProject(value)
    .subscribe(data => {
      console.log('am here')

      this.toastr.success('New Project added successfully', 'Success!');
      this.router.navigate(['/admin/projects/listprojects'])
    }, ()=> {
      //console.log(res)
       this.toastr.error('Error occurred while adding project', 'Error!');
    }, () => {
       this.toastr.success('New Project added successfully', 'Success!');
    })
    }
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
    'bidOpeningDate': '',
    'budgetaryProvision': ''

   
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
      'budgetaryProvision': {
        'required' : 'Budgetary provision is needed'
      }
      
     
   
    
   }

}
