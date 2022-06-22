import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { ResponseI } from '../../models/response.interface';
import { RequestI } from '../../models/request.interface';
import { ClasificadorI } from '../../models/clasificador.interface';
import { FileI } from '../../models/file.interface';

import { from, Observable,BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  url:string= "http://localhost:4000/request/"; 

  url0:string= "http://localhost:4000/request/user/"; 

  urlb:string= "http://localhost:4000/request/user/buscar/"; 

  url1:string= "http://localhost:4000/file/"; 

  url2:string= "http://localhost:4000/clasificadores/"; 

  constructor(private http:HttpClient) { }

  //               ----REQUEST----                      //
  getAllRequest(token:any):Observable<RequestI[]>{
    let headers = new HttpHeaders().set('Authorization',token);
    return this.http.get<RequestI[]>(this.url,{headers});
  }

  postRequest(form:RequestI,token:any):Observable<ResponseI>{
    let headers = new HttpHeaders().set('Authorization',token);
    console.log(form)
    return this.http.post<ResponseI>(this.url,form,{ headers });
  }

  getRequestById(id:string,token:any):Observable<RequestI>{
    let headers = new HttpHeaders().set('Authorization',token);
    return this.http.get<RequestI>(this.url+id,{ headers });
  }

  getRequestByIdUserBuscar(id:string,token:any):Observable<RequestI[]>{
    let headers = new HttpHeaders().set('Authorization',token);
    return this.http.get<RequestI[]>(this.urlb+id,{ headers });
  }

  getRequestByIdUser(id:string,token:any):Observable<RequestI[]>{
    let headers = new HttpHeaders().set('Authorization',token);
    return this.http.get<RequestI[]>(this.url0+id,{ headers });
  }

  updateRequesttById(form:RequestI,token:any):Observable<ResponseI>{
    let headers = new HttpHeaders().set('Authorization',token);
    console.log(form.idSolicitud)
    return this.http.put<ResponseI>(this.url+form.idSolicitud,form,{ headers });
  }

  deleteRequestById(id:string,token:any){
    let headers = new HttpHeaders().set('Authorization',token);
    return this.http.delete<ResponseI>(this.url+id,{ headers });
  }
//               ----END REQUEST----                      //

//               ----CLASIFICADOR----                    //
getAllClasificadores(token:any):Observable<ClasificadorI[]>{
  let headers = new HttpHeaders().set('Authorization',token);
  return this.http.get<ClasificadorI[]>(this.url2,{headers});
}

//               ----FILE----                           //
postFile(form:any,token:any):Observable<ResponseI>{
  let headers = new HttpHeaders().set('Authorization',token);
  console.log(form);
  return this.http.post<ResponseI>(this.url1,form,{ headers });
}

deleteFileById(id:string,token:any){
  let headers = new HttpHeaders().set('Authorization',token);
  return this.http.delete<ResponseI>(this.url1+id,{ headers });
}

getAllFiles(id:string,token:any):Observable<FileI[]>{
  let headers = new HttpHeaders().set('Authorization',token);
  return this.http.get<FileI[]>(this.url1+id,{headers});
}

}
