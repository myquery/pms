import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {ListprojectsComponent} from './listprojects/listprojects.component'
import {AddprojectsComponent} from './addprojects/addprojects.component'
import {EditprojectsComponent} from './editprojects/editprojects.component'
import {ProjectsComponent} from './projects.component'

export  const ProjectsRoutes = {
            path: 'projects', 
            component : ProjectsComponent,
            children : [
                {path : '', redirectTo : 'listprojects', pathMatch: 'full'},
                {path :  'listprojects', component: ListprojectsComponent},
                {path :  'addprojects', component: AddprojectsComponent},
                 {path : 'editprojects/:id', component: EditprojectsComponent}

                ]
            }



    
