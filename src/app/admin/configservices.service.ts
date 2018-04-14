import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http'
import {Config} from './../api'
import 'rxjs/add/operator/map'
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/catch';

@Injectable()
export class ConfigservicesService {
public token : string
   constructor(private http : Http) { 
    this.token = localStorage.getItem('nde-token')
  }

    getProcurement(){
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.token });
    let options = new RequestOptions({ headers: headers });
    let request = Date.now()
    var url =`${Config.api}/procurement-methods?timeofrequest=${request}`
    return this.http.get(url, options)
    .map(res => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  addProcurement(dept){
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.token });
    let options = new RequestOptions({ headers: headers });
    
    var url =`${Config.api}/procurement-methods`
    return this.http.post(url, dept, options)
    .map(res => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }

  updateProcurement(id, value){
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.token });
    let options = new RequestOptions({ headers: headers });
    let url = `${Config.api}/procurement-methods/${id}`;
    return this.http.put(url, value, options)
    .map(res => res)
    .catch((error:any) => Observable.throw(error || 'Server error'));

  }

  deleteProcurement(id){
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.token });
    let options = new RequestOptions({ headers: headers });
    let url = `${Config.api}/procurement-methods/${id}`;
    return this.http.delete(url)
    .map(res => res)
    .catch((error:any) => Observable.throw(error || 'Server error'));
  }

  getProcurementById(id){
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.token });
    let options = new RequestOptions({ headers: headers });
    let url = `${Config.api}/procurement-methods/${id}`;
    return this.http.get(url)
    .map(res => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  //project management starts

   addProject(project){
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.token });
    let options = new RequestOptions({ headers: headers });
    
    var url =`${Config.api}/projects`
    return this.http.post(url, project, options)
    .map(res => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }

    getProjects(){
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.token });
    let options = new RequestOptions({ headers: headers });
    let request = Date.now()
    var url =`${Config.api}/projects?timeofrequest=${request}`
    return this.http.get(url, options)
    .map(res => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

    deleteProject(id){
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.token });
    let options = new RequestOptions({ headers: headers });
    let url = `${Config.api}/projects/${id}`;
    return this.http.delete(url)
    .map(res => res)
    .catch((error:any) => Observable.throw(error || 'Server error'));
  }

    getProjectById(id){
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.token });
    let options = new RequestOptions({ headers: headers });
    let url = `${Config.api}/projects/${id}`;
    return this.http.get(url)
    .map(res => res.json())
    .catch((error:any) => Observable.throw(error || 'Server error'));
  }

    updateProject(id, value){
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.token });
    let options = new RequestOptions({ headers: headers });
    let url = `${Config.api}/projects/${id}`;
    return this.http.put(url, value, options)
    .map(res => res)
    .catch((error:any) => Observable.throw(error || 'Server error'));

  }

  //create project group
  addGroup(group){
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.token });
    let options = new RequestOptions({ headers: headers });
    var url =`${Config.api}/groups`
    return this.http.post(url, group, options)
    .map(res => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }

    getGroups(){
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.token });
    let options = new RequestOptions({ headers: headers });
    let request = Date.now()
    var url =`${Config.api}/groups?timeofrequest=${request}`
    return this.http.get(url, options)
    .map(res => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

    deleteGroup(id){
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.token });
    let options = new RequestOptions({ headers: headers });
    let url = `${Config.api}/groups/${id}`;
    return this.http.delete(url)
    .map(res => res)
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

    getGroupById(id){
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.token });
    let options = new RequestOptions({ headers: headers });
    let url = `${Config.api}/groups/${id}`;
    return this.http.get(url)
    .map(res => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

    updateGroup(id, value){
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.token });
    let options = new RequestOptions({ headers: headers });
    let url = `${Config.api}/groups/${id}`;
    return this.http.put(url, value, options)
    .map(res => res)
    .catch((error:any) => Observable.throw(error || 'Server error'));

  }



}
