import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router'
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, OnDestroy {

  bodyClasses = 'skin-blue sidebar-mini';
  body: HTMLBodyElement = document.getElementsByTagName('body')[0];

  constructor(private loader : SlimLoadingBarService, private router : Router) {
      this.loadIndicator()
   }

  ngOnInit() {
    // add the the body classes
    this.body.classList.add('skin-blue');
    this.body.classList.add('sidebar-mini');

   this.router.events.subscribe((event: any): void => {
      this.navigationInterceptor(event);
    });
  
  }
  loadIndicator(){
    this.loader.start()
  }
  endIndicator(){
   this.loader.complete() 
  }

   navigationInterceptor(event): void {
    if (event instanceof NavigationStart) {
      this.loadIndicator();
    }
    if (event instanceof NavigationEnd) {
      this.endIndicator();    }
    if (event instanceof NavigationCancel) {
      this.endIndicator();
    }
    if (event instanceof NavigationError) {
      this.endIndicator();
    }
  }

   ngOnDestroy() {
    // remove the the body classes
    this.body.classList.remove('skin-blue');
    this.body.classList.remove('sidebar-mini');
  }

}
