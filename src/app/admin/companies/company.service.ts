import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Config} from './../../api';

import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinct';
import 'rxjs/add/operator/catch';

@Injectable()
export class CompanyService {
public token : string

  constructor(private http : Http) { 
    this.token = localStorage.getItem('nde-token')
  }

  getCompany(){
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.token});
    let options = new RequestOptions({ headers: headers });
    let request = Date.now()
    var url =`${Config.api}/companies?timeofrequest=${request}`
    return this.http.get(url, options)
    .map(res => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  _addCompany(coy){
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.token});
    let options = new RequestOptions({ headers: headers });
    
    var url =`${Config.api}/companies`
    return this.http.post(url, coy, options)
    .map(res => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
   }

  updateCompany(id, value){
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.token });
    let options = new RequestOptions({ headers: headers });
    let url = `${Config.api}/companies/${id}`;
    return this.http.put(url, value, options)
    .map(res => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }

  deleteCompany(id){
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.token});
    let options = new RequestOptions({ headers: headers });
    let url = `${Config.api}/companies/${id}`;
    return this.http.delete(url)
    .map(res => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getCompanyById(id){
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.token});
    let options = new RequestOptions({ headers: headers });
    let url = `${Config.api}/companies/${id}`;
    return this.http.get(url)
    .map(res => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }



}
