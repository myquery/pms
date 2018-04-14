import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {ListpositionComponent} from './listposition/listposition.component'
import {AddpositionComponent} from './addposition/addposition.component'
import {EditpositionComponent} from './editposition/editposition.component'
import {PositionComponent} from './position.component'

export  const PositionRoutes = {
            path: 'createposition', 
            component : PositionComponent,
            children : [
                {path : '', redirectTo : 'listpositions', pathMatch: 'full'},
                {path :  'listpositions', component: ListpositionComponent},
                {path :  'addposition', component: AddpositionComponent},
                {path : 'editposition/:id', component: EditpositionComponent}

                ]
            }

