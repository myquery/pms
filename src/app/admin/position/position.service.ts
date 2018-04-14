import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http'
import {Config} from './../../api'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import {Observable} from 'rxjs/Rx';

@Injectable()
export class PositionService {
public token : string

  constructor(private http : Http) {
    this.token = localStorage.getItem('nde-token')
   }

  getPosition(){
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.token });
    let options = new RequestOptions({ headers: headers });
    let request = Date.now()
    var url =`${Config.api}/positions?timeofrequest=${request}`
    return this.http.get(url, options)
    .map(res => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  addPosition(positions){
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.token });
    let options = new RequestOptions({ headers: headers });
    var url =`${Config.api}/positions`
    return this.http.post(url, positions, options)
    .map(res => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }

  updatePosition(id, value){
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.token });
    let options = new RequestOptions({ headers: headers });
    let url = `${Config.api}/positions/${id}`;
    return this.http.put(url, value, options)
    .map(res => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }

  deletePosition(id){
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.token });
    let options = new RequestOptions({ headers: headers });
    let url = `${Config.api}/positions/${id}`;
    return this.http.delete(url)
    .map(res => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getPositionById(id){
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.token });
    let options = new RequestOptions({ headers: headers });
    let url = `${Config.api}/positions/${id}`;
    return this.http.get(url)
    .map(res => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }



}
