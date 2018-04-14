import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {ListdepartmentComponent} from './listdepartment/listdepartment.component'
import {AdddepartmentComponent} from './adddepartment/adddepartment.component'
import {EditdepartmentComponent} from './editdepartment/editdepartment.component'
import {DepartmentComponent} from './department.component'

export  const DeptRoutes = {
            path: 'createdepartment', 
            component : DepartmentComponent,
            children : [
                {path : '', redirectTo : 'listdepartment', pathMatch: 'full'},
                {path :  'listdepartment', component: ListdepartmentComponent},
                {path :  'adddepartment', component: AdddepartmentComponent},
                 {path : 'editdepartment/:id', component: EditdepartmentComponent}

                ]
            }



    
