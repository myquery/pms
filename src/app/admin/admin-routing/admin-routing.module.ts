import { AdminDashboard2Component } from './../admin-dashboard2/admin-dashboard2.component';
import { AdminDashboard1Component } from './../admin-dashboard1/admin-dashboard1.component';
import { AdminComponent } from './../admin.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {NdeAuthGuardService} from './../../nde-auth-guard.service'
import {AdminCreateUsersComponent} from './../admin-create-users/admin-create-users.component'
import {AdminCreateProjectsComponent} from './../admin-create-projects/admin-create-projects.component'
import {AdminListBiddersComponent} from './../admin-list-bidders/admin-list-bidders.component'
import {AdminListConsultantsComponent} from './../admin-list-consultants/admin-list-consultants.component'
import {AdminListApprovedComponent} from './../admin-list-approved/admin-list-approved.component'
import {AdminGenerateAwardLetterComponent} from './../admin-generate-award-letter/admin-generate-award-letter.component'

import {AdminEditUsersComponent} from './../admin-create-users/admin-manage-users/admin-edit-users/admin-edit-users.component'
import {AdminAssignRolesComponent} from './../admin-create-users/admin-manage-users/admin-assign-roles/admin-assign-roles.component'
import {AdminListUsersComponent} from './../admin-create-users/admin-manage-users/admin-list-users/admin-list-users.component'
import {AdminManageUsersComponent} from './../admin-create-users/admin-manage-users/admin-manage-users.component'
import {AdminNewUserComponent} from './../admin-create-users/admin-new-user/admin-new-user.component'

import {DeptRoutes} from './../department/department.routing.module';
import {PositionRoutes} from './../position/position.routing.module';
import {CompanyRoutes} from './../companies/company.routing.module';
import {ProcurementRoutes} from './../procurement-method/procurement.routing.module';
import {ProjectsRoutes} from './../projects/admin.project.routing.module';
import {GroupsRoutes} from './../project-group/admin.groups.routing';


const rootRoutes : Routes = [
      {
        path: 'admin',
        component: AdminComponent,
        canActivate : [NdeAuthGuardService],
        children: [
          {
            path: '',
            redirectTo: 'dashboard1',
            pathMatch: 'full'
          },
          {
            path: 'dashboard1',
            component: AdminDashboard1Component
          },
          {
            path: 'createusers',
            component: AdminCreateUsersComponent,
            children:[
              {path: '', redirectTo: 'manageusers/listusers', pathMatch: 'full' },
              {path : 'newusers', component : AdminNewUserComponent },
              {
                path : 'manageusers', 
                component: AdminManageUsersComponent,
                children : [
                    {path: '', redirectTo: 'listusers', pathMatch: 'full' },
                    {path: 'listusers', component: AdminListUsersComponent },
                    {path: 'editusers/:id', component: AdminEditUsersComponent },
                    {path: 'assignroles/:id', component: AdminAssignRolesComponent}
                ]
            },
            

            ]
          },
          {
            path: 'createproject',
            component: AdminCreateProjectsComponent
          },
           {
            path: 'listbidders',
            component: AdminListBiddersComponent
          },
            {
            path: 'listconsultants',
            component: AdminListConsultantsComponent
          },
          {
            path: 'listapproved',
            component: AdminListApprovedComponent
          },
          {
            path: 'generateawardletter',
            component: AdminGenerateAwardLetterComponent
          }, 
          DeptRoutes, 
          PositionRoutes,
          CompanyRoutes,
          ProcurementRoutes,
          ProjectsRoutes,
          GroupsRoutes
        ]
      }
    ]
@NgModule({
  imports: [
    RouterModule.forChild(rootRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
