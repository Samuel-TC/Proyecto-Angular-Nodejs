import { Injectable } from '@angular/core';
import { UserI } from '../../models/user.interface';
import { SexI } from '../../models/sex.interface';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { ResponseI } from '../../models/response.interface';

import { from, Observable,BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http:HttpClient ) { }

  url:string= "http://localhost:4000/user/";
  url1:string= "http://localhost:4000/user1/";
  url2:string= "http://localhost:4000/sex/";
  urlfoto:string= "http://localhost:4000/user2/";

  getAllUsers(Pag:any, token:any):Observable<UserI[]>{
    let headers = new HttpHeaders().set('Authorization',token);
    return this.http.get<UserI[]>(this.url1+Pag,{headers});
  }

  getUserById(id:string,token:any):Observable<UserI>{
    console.log(id)
    let headers = new HttpHeaders().set('Authorization',token);
    return this.http.get<UserI>(this.url+id,{ headers });
  }

  //USER IMG
  getUserByIdIMG(id:string,token:any):Observable<UserI>{
    console.log(id)
    let headers = new HttpHeaders().set('Authorization',token);
    return this.http.get<UserI>(this.urlfoto+id,{ headers });
  }

  updateUserById(form:UserI,token:any):Observable<ResponseI>{
    let headers = new HttpHeaders().set('Authorization',token);
    return this.http.put<ResponseI>(this.url+form.cedula,form,{ headers });
  }

  deleteUserById(id:string,token:any){
    let headers = new HttpHeaders().set('Authorization',token);
    return this.http.delete<ResponseI>(this.url+id,{ headers });
  }

  //GET sex
  getAllSex(token:any):Observable<SexI[]>{
    let headers = new HttpHeaders().set('Authorization',token);
    return this.http.get<SexI[]>(this.url2,{headers});
  }

}


