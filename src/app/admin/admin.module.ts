import { AdminRoutingModule } from './admin-routing/admin-routing.module';
// import {DepartmentRoutingModule} from './department/department.routing.module'

import {ReactiveFormsModule} from '@angular/forms';
import { AdminDashboard1Component } from './admin-dashboard1/admin-dashboard1.component';
import { AdminControlSidebarComponent } from './admin-control-sidebar/admin-control-sidebar.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { AdminContentComponent } from './admin-content/admin-content.component';
import { AdminLeftSideComponent } from './admin-left-side/admin-left-side.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';
import { AdminDashboard2Component } from './admin-dashboard2/admin-dashboard2.component';
import { AdminCreateUsersComponent } from './admin-create-users/admin-create-users.component';
import { AdminCreateProjectsComponent } from './admin-create-projects/admin-create-projects.component';
import { AdminListBiddersComponent } from './admin-list-bidders/admin-list-bidders.component';
import { AdminListBiddersDetailComponent } from './admin-list-bidders-detail/admin-list-bidders-detail.component';
import { AdminListConsultantsComponent } from './admin-list-consultants/admin-list-consultants.component';
import { AdminListConsultantsDetailComponent } from './admin-list-consultants-detail/admin-list-consultants-detail.component';
import { AdminListApprovedComponent } from './admin-list-approved/admin-list-approved.component';
import { AdminGenerateAwardLetterComponent } from './admin-generate-award-letter/admin-generate-award-letter.component';
import { AdminEditUsersComponent } from './admin-create-users/admin-manage-users/admin-edit-users/admin-edit-users.component';
import { AdminAssignRolesComponent } from './admin-create-users/admin-manage-users/admin-assign-roles/admin-assign-roles.component';
import { AdminNewUserComponent } from './admin-create-users/admin-new-user/admin-new-user.component';
import { AdminManageUsersComponent } from './admin-create-users/admin-manage-users/admin-manage-users.component';
import { AdminListUsersComponent } from './admin-create-users/admin-manage-users/admin-list-users/admin-list-users.component';
import { AddcompanyComponent } from './companies/addcompany/addcompany.component';
import { EditcompanyComponent } from './companies/editcompany/editcompany.component';
import { ListcompanyComponent } from './companies/listcompany/listcompany.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProcurementMethodComponent } from './procurement-method/procurement-method.component';
import { ListprocurementComponent } from './procurement-method/listprocurement/listprocurement.component';
import { EditprocurementComponent } from './procurement-method/editprocurement/editprocurement.component';
import { AddprocurementComponent } from './procurement-method/addprocurement/addprocurement.component';
import { ListprojectsComponent } from './projects/listprojects/listprojects.component';
import { AddprojectsComponent } from './projects/addprojects/addprojects.component';
import { EditprojectsComponent } from './projects/editprojects/editprojects.component';
import { ProjectGroupComponent } from './project-group/project-group.component';
import { ListgroupComponent } from './project-group/listgroup/listgroup.component';
import { AddgroupComponent } from './project-group/addgroup/addgroup.component';
import { EditgroupComponent } from './project-group/editgroup/editgroup.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    // DepartmentRoutingModule,
    SlimLoadingBarModule.forRoot()
  ],
  declarations: [
    AdminComponent,
    AdminHeaderComponent,
    AdminLeftSideComponent,
    AdminContentComponent,
    AdminFooterComponent,
    AdminControlSidebarComponent,
    AdminDashboard1Component,
    AdminDashboard2Component,
    AdminCreateUsersComponent,
    AdminCreateProjectsComponent,
    AdminListBiddersComponent,
    AdminListBiddersDetailComponent,
    AdminListConsultantsComponent,
    AdminListConsultantsDetailComponent,
    AdminListApprovedComponent,
    AdminGenerateAwardLetterComponent,
    AdminEditUsersComponent,
    AdminAssignRolesComponent,
    AdminNewUserComponent,
    AdminManageUsersComponent,
    AdminListUsersComponent,
    AddcompanyComponent,
    EditcompanyComponent,
    ListcompanyComponent,
    ProjectsComponent,
    ProcurementMethodComponent,
    ListprocurementComponent,
    EditprocurementComponent,
    AddprocurementComponent,
    ListprojectsComponent,
    AddprojectsComponent,
    EditprojectsComponent,
    ProjectGroupComponent,
    ListgroupComponent,
    AddgroupComponent,
    EditgroupComponent
  ],
  exports: [AdminComponent]
})
export class AdminModule { }
