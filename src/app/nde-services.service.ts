import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http'
// import {Router, ActivatedRoute} from '@angular/router'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import {Observable} from 'rxjs/Rx';
import {Config} from './api'
import {JwtHelper} from 'angular2-jwt'

@Injectable()
export class NdeServicesService {
public token : string
public currentUser : string
  constructor(private http: Http) { }
  loginAdmin(credential){
    var header = new Headers()
    var url =`${Config.api}/login`

    return this.http.post(url, credential)
    .map(res => {
         let token = res.json() && res.json().token; 
        if (token) {
                    // set token property
                    this.token = token;
 
                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('nde-token', JSON.stringify({ username: credential.username, token: token }));

                    let jwtHelper = new JwtHelper
                    let currentUser = jwtHelper.decodeToken(token)

                    localStorage.setItem('currentUser', JSON.stringify(currentUser.userProfile))
                    this.currentUser = currentUser
                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
    })
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        this.currentUser = null;
        localStorage.removeItem('nde-token');
        localStorage.removeItem('currentUser');
    }

  checkEmail(email){
    // var url ="https://jsonplaceholder.typicode.com/users?email=" + email
    var url ="https://jsonplaceholder.typicode.com/users"
    return this.http.get(url)
    .map(res =>  res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  createUsers(values){
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.token });
    let options = new RequestOptions({ headers: headers });
    let url = `${Config.api}/users`;
    return this.http.post(url, values, options)
    .map(res => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
  getUsers(){
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.token });
    let options = new RequestOptions({ headers: headers });
    let url = `${Config.api}/users`;
    return this.http.get(url, options)
    .map(res => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
  getUsersById(id){
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.token });
    let options = new RequestOptions({ headers: headers });
    let url = `${Config.api}/users/${id}`;
    return this.http.get(url)
    .map(res => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  updateusers(id, value){
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.token });
    let options = new RequestOptions({ headers: headers });
    let url = `${Config.api}/users/${id}`;
    return this.http.put(url, value, options)
    .map(res => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    
  }

  deleteUser(id){
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.token });
    let options = new RequestOptions({ headers: headers });
    let url = `${Config.api}/users/${id}`;
    return this.http.delete(url)
    .map(res => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
