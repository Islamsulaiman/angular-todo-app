import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  
  getAllUsers(){
  return this._http.get("https://dummyjson.com/users");
  }

}
