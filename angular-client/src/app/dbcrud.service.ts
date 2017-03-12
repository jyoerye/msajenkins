import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions, URLSearchParams} from'@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/Rx';

@Injectable()
export class DbcrudService {

  constructor(private http:Http) { }
  
  getDetails(id:string,fname:string,lname:string)
  {
	  let headers = new Headers({'Content-Type':'application/json'});
	  
	  console.log("In service "+lname)
	  return this.http.post('http://ec2-54-236-32-164.compute-1.amazonaws.com:8081/people/',JSON.stringify({firstName : fname, lastName : lname }),{headers:headers})
	  .map(response=>response.json())
	  .catch(error=>Observable.throw(error.statusText));
	  
	  
  }

}
