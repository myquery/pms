import { Component, OnInit } from '@angular/core';
import { PositionService } from './../position.service'
@Component({
  selector: 'app-listposition',
  templateUrl: './listposition.component.html',
  styleUrls: ['./listposition.component.css']
})
export class ListpositionComponent implements OnInit {
  public positions: any[]
  constructor(private service : PositionService) {  this.getPosition() }

  ngOnInit() {
    //this.getPosition()
  }
  getPosition(){
    this.service.getPosition()
    .subscribe(data => {
      this.positions = data

    })
  }

  removePosition(id){
     let okDelete = confirm('Are you sure you want remove position?')
     if(okDelete){
     this.service.deletePosition(id)
    .subscribe(res => {
      res
          
    })    
     } 
     this.getPosition()
  }

}
