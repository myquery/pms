import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute,  NavigationStart, NavigationEnd} from '@angular/router'
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';

@Component({
  selector: 'ndelogin',
  templateUrl: './ndelogin.component.html',
  styleUrls: ['./ndelogin.component.css']
})
export class NdeloginComponent implements OnInit {

  bodyClasses = 'skin-blue sidebar-mini';
  body: HTMLBodyElement = document.getElementsByTagName('body')[0];

  constructor(private router : Router,
      private loader : SlimLoadingBarService) { 
  
  //this.loadIndicator()

  }

  ngOnInit() {
    // add the the body classes
    this.body.classList.add('skin-blue');
    this.body.classList.add('sidebar-mini');
     this.routeCheck()
    
  }
routeCheck(){
    this.router.events.subscribe(data => 
      {
        
    //check whether the returned data is a property of router Event
      if(data instanceof NavigationStart){
         this.loader.start()     
      }else if (data instanceof NavigationEnd) {
        this.loader.complete()   
      }else {
        this.loader.stop()   
      }
    
  })
}
   ngOnDestroy() {
    // remove the the body classes
    this.body.classList.remove('skin-blue');
    this.body.classList.remove('sidebar-mini');
  }
  // loadIndicator(){
  //    this.loader.start() 
  // }

}
