import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {ListcompanyComponent} from './listcompany/listcompany.component';
import {AddcompanyComponent} from './addcompany/addcompany.component';
import {EditcompanyComponent} from './editcompany/editcompany.component';
import {CompaniesComponent} from './companies.component';

export  const CompanyRoutes = {
            path: 'createcompany', 
            component: CompaniesComponent,
            children : [
                {path : '', redirectTo : 'listcompany', pathMatch: 'full'},
                {path :  'listcompany',component: ListcompanyComponent},
                {path :  'addcompany', component: AddcompanyComponent},
                {path : 'editcompany/:id', component: EditcompanyComponent}

                ]
            }



    
