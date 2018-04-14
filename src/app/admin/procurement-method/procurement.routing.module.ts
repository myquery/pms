import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {ListprocurementComponent} from './listprocurement/listprocurement.component'
import {AddprocurementComponent} from './addprocurement/addprocurement.component'
import {EditprocurementComponent} from './editprocurement/editprocurement.component'
import {ProcurementMethodComponent} from './procurement-method.component'

export  const ProcurementRoutes = {
            path: 'procurement', 
            component : ProcurementMethodComponent,
            children : [
                {path : '', redirectTo : 'listprocurement', pathMatch: 'full'},
                {path :  'listprocurement', component: ListprocurementComponent},
                {path :  'addprocurement', component: AddprocurementComponent},
                 {path : 'editprocurement/:id', component: EditprocurementComponent}

                ]
            }



    
