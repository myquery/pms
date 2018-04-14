import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule} from "@angular/http";
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';

import { AppComponent } from './app.component';
import {NdeServicesService } from './nde-services.service';
import {NdeAuthGuardService} from './nde-auth-guard.service'
import { AdminComponent } from './admin/admin.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { AdminLeftSideComponent } from './admin/admin-left-side/admin-left-side.component';
import { AdminContentComponent } from './admin/admin-content/admin-content.component';
import { AdminFooterComponent } from './admin/admin-footer/admin-footer.component';
import { AdminControlSidebarComponent } from './admin/admin-control-sidebar/admin-control-sidebar.component';
import { AdminDashboard1Component } from './admin/admin-dashboard1/admin-dashboard1.component';
import { NdeloginComponent } from './ndelogin/ndelogin.component';
import { NdeloginHeaderComponent } from './ndelogin/ndelogin-header/ndelogin-header.component';
import { NdeloginFooterComponent } from './ndelogin/ndelogin-footer/ndelogin-footer.component';
import { NdeloginLandingComponent } from './ndelogin/ndelogin-landing/ndelogin-landing.component';
import { DepartmentComponent } from './admin/department/department.component';
import { PositionComponent } from './admin/position/position.component';
import { ListdepartmentComponent } from './admin/department/listdepartment/listdepartment.component';
import { EditdepartmentComponent } from './admin/department/editdepartment/editdepartment.component';
import { AdddepartmentComponent } from './admin/department/adddepartment/adddepartment.component';
import { ListpositionComponent } from './admin/position/listposition/listposition.component';
import { EditpositionComponent } from './admin/position/editposition/editposition.component';
import { AddpositionComponent } from './admin/position/addposition/addposition.component';

//departments
import {DepartmentService} from './admin/department/department.service'
//position
import {PositionService} from './admin/position/position.service';
import {CompanyService} from './admin/companies/company.service';
import {ConfigservicesService} from './admin/configservices.service';
import { CompaniesComponent } from './admin/companies/companies.component';
import { PaginationComponent } from './admin/pagination/pagination.component';
import { CreateProjectGroupComponent } from './admin/create-project-group/create-project-group.component'


@NgModule({
  declarations: [
    AppComponent,
    NdeloginComponent,
    NdeloginHeaderComponent,
    NdeloginFooterComponent,
    NdeloginLandingComponent,
    DepartmentComponent,
    PositionComponent,
    ListdepartmentComponent,
    EditdepartmentComponent,
    AdddepartmentComponent,
    ListpositionComponent,
    EditpositionComponent,
    AddpositionComponent,
    CompaniesComponent,
    PaginationComponent,
    CreateProjectGroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    ToastModule.forRoot(),
    SlimLoadingBarModule.forRoot()
  ],
  exports : [SlimLoadingBarModule],
  providers: [
    NdeServicesService, 
    NdeAuthGuardService, 
    DepartmentService, 
    PositionService,
    CompanyService,
    ConfigservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
