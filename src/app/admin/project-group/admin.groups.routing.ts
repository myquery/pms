import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {ListgroupComponent} from './listgroup/listgroup.component'
import {AddgroupComponent} from './addgroup/addgroup.component'
import {EditgroupComponent} from './editgroup/editgroup.component'
import {ProjectGroupComponent} from './project-group.component'

export  const GroupsRoutes = {
            path: 'groups', 
            component : ProjectGroupComponent,
            children : [
                {path : '', redirectTo : 'listgroups', pathMatch: 'full'},
                {path :  'listgroups', component: ListgroupComponent},
                {path :  'addgroup', component: AddgroupComponent},
                 {path : 'editgroup/:id', component: EditgroupComponent}

                ]
            }



    
