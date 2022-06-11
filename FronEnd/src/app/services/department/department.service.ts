import { Injectable } from '@angular/core';
import { DepartmentI } from '../../models/department.interface';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { ResponseI } from '../../models/response.interface';
import { ContryI } from '../../models/contry.interface';
import { ProvinceI } from '../../models/province.interface';
import { DistrictI } from '../../models/distric.interface';

import { from, Observable,BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  url:string= "http://localhost:4000/departamento/"; 

  url1:string= "http://localhost:4000/countrys/"; 
  url2:string= "http://localhost:4000/provinces/"; 
  url3:string= "http://localhost:4000/districts/"; 

  constructor(private http:HttpClient) { }

  getAllDepartment(token:any):Observable<DepartmentI[]>{
    let headers = new HttpHeaders().set('Authorization',token);
    return this.http.get<DepartmentI[]>(this.url,{headers});
  }

  postDepartment(form:DepartmentI,token:any):Observable<ResponseI>{
    let headers = new HttpHeaders().set('Authorization',token);
    return this.http.post<ResponseI>(this.url,form,{ headers });
  }

  getDepartmentById(id:string,token:any):Observable<DepartmentI>{
    let headers = new HttpHeaders().set('Authorization',token);
    return this.http.get<DepartmentI>(this.url+id,{ headers });
  }

  updateDepartmentById(form:DepartmentI,token:any):Observable<ResponseI>{
    let headers = new HttpHeaders().set('Authorization',token);
    console.log(form.idDepartamento)
    return this.http.put<ResponseI>(this.url+form.idDepartamento,form,{ headers });
  }

  deleteDepartmentById(id:string,token:any){
    let headers = new HttpHeaders().set('Authorization',token);
    return this.http.delete<ResponseI>(this.url+id,{ headers });
  }

  //Location
  getAllContrys(token:any):Observable<ContryI[]>{
    let headers = new HttpHeaders().set('Authorization',token);
    return this.http.get<ContryI[]>(this.url1,{headers});
  }

  getAllDistric(token:any):Observable<DistrictI[]>{
    let headers = new HttpHeaders().set('Authorization',token);
    return this.http.get<DistrictI[]>(this.url3,{headers});
  }

  getAllProvinces(token:any):Observable<ProvinceI[]>{
    let headers = new HttpHeaders().set('Authorization',token);
    return this.http.get<ProvinceI[]>(this.url2,{headers});
  }

}
