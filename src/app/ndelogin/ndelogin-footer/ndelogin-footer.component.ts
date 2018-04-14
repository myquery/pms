import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ndelogin-footer',
  templateUrl: './ndelogin-footer.component.html',
  styleUrls: ['./ndelogin-footer.component.css']
})
export class NdeloginFooterComponent implements OnInit {
  public newDate
  constructor() { }

  ngOnInit() {
    let d = new Date()
    this.newDate = d.getFullYear()
  }

}
