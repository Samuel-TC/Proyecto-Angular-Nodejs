import { Injectable } from '@angular/core';
import { LoginI } from '../../models/login.interface';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { ResponseI } from '../../models/response.interface';

import { from, Observable,BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url:string= "http://localhost:4000/login"; 
  autSubject = new BehaviorSubject(false);
  private token: string='';

  constructor(private http:HttpClient) { }

  loginUser(form: LoginI): Observable<ResponseI>{
    let link = this.url;
    console.log(form.username,form.password,link,"conexion exitosa!!!")
    return this.http.post<ResponseI>(link,form);
    
  }
}
