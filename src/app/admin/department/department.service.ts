import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http'
import {Config} from './../../api'
import 'rxjs/add/operator/map'

@Injectable()
export class DepartmentService {
public token : string

  constructor(private http : Http) { 
    this.token = localStorage.getItem('nde-token')
  }

  getDepartment(){
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.token });
    let options = new RequestOptions({ headers: headers });
    let request = Date.now()
    var url =`${Config.api}/departments?timeofrequest=${request}`
    return this.http.get(url, options)
    .map(res => res.json())
  }

  addDepartment(dept){
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.token });
    let options = new RequestOptions({ headers: headers });
    
    var url =`${Config.api}/departments`
    return this.http.post(url, dept, options)
    .map(res => res.json())

  }

  updateDepartment(id, value){
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.token });
    let options = new RequestOptions({ headers: headers });
    let url = `${Config.api}/departments/${id}`;
    return this.http.put(url, value, options)
    .map(res => res.json())

  }

  deleteDepartment(id){
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.token });
    let options = new RequestOptions({ headers: headers });
    let url = `${Config.api}/departments/${id}`;
    return this.http.delete(url)
    .map(res => res.json())
  }

  getDepartmentById(id){
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.token });
    let options = new RequestOptions({ headers: headers });
    let url = `${Config.api}/departments/${id}`;
    return this.http.get(url)
    .map(res => res.json())
  }



}
