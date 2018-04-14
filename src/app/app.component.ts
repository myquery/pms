import { Component } from '@angular/core';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor( private loader : SlimLoadingBarService ){
 //this.loadIndicator()

  }

  loadIndicator(){
    this.loader.start()
  }
}
