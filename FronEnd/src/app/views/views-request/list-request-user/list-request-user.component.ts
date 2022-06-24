import { Component, OnInit, OnDestroy, VERSION, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from '../../../services/request/request.service';
import { AlertsService } from '../../../services/alerts/alerts.service';

import { Subject } from 'rxjs';
import { RequestI } from '../../../models/request.interface'

@Component({
  selector: 'app-list-request-user',
  templateUrl: './list-request-user.component.html',
  styleUrls: ['./list-request-user.component.scss']
})
export class ListRequestUserComponent implements OnInit, OnDestroy {

  pag:any =1;
  //List REQUEST
  requests: RequestI[] = [];

  name = 'Angular ' + VERSION.major;
  @ViewChild('buscar') buscar: ElementRef;

  constructor(private api: RequestService, private router: Router, private alert: AlertsService) { }

  ngOnDestroy(): void {
    
  }

  ngOnInit(): void {

    let token = this.getToken();
    this.api.getRequestByIdUser(localStorage.getItem("idUsuario")+','+this.pag, token).subscribe(res => {
      this.requests = res;
    });

  }

  editRequest(id: string) {
    this.router.navigate(['edit/request', id])
  }

  addRequest() {
    this.router.navigate(['request'])
  }

  deleteRequest(id: any) {
    this.api.deleteRequestById(id, this.getToken()).subscribe(data => {
      console.log("Eliminado");
    })

    //List Request
    this.api.getRequestByIdUser(localStorage.getItem("idUsuario")+','+this.pag, this.getToken()).subscribe(res => {
      this.requests = res;
     
    });

    this.api.getRequestByIdUser(localStorage.getItem("idUsuario")+this.pag, this.getToken()).subscribe(res => {
      this.requests = res;
     
    });
    
    this.alert.alertSuccess('Deleted Departmanet!');

  }

  getToken() {
    return localStorage.getItem('token');
  }

  ant() {
    if (this.pag - 1 > 0) {
      this.pag=this.pag-1;
      this.api.getRequestByIdUser(localStorage.getItem("idUsuario")+','+this.pag,this.getToken()).subscribe(res => {
        this.requests = res;
       
      });
    }
  }

  sig() {
    
    this.api.getRequestByIdUser(localStorage.getItem("idUsuario")+','+this.pag,this.getToken()).subscribe(res => {
      console.log(res.length);
      if(res.length>0){
        this.requests = res;
        this.pag=this.pag+1;
      }
    
     
    });
  }

  verArchivos(id:string){
    this.router.navigateByUrl('request/files/'+id);
  }


  buscarf(event: any){
    var search: string = this.buscar.nativeElement.value;
    this.api.getRequestByIdUserBuscar(localStorage.getItem("idUsuario")+','+search, this.getToken()).subscribe(res => {
      console.log(res.length);
      if(res.length>0){
        this.requests = res;
      }
     
    });
  }

  buscarb(){
    var search: string = this.buscar.nativeElement.value;
    this.api.getRequestByIdUserBuscar(localStorage.getItem("idUsuario")+','+search, this.getToken()).subscribe(res => {
      console.log(res.length);
      if(res.length>0){
        this.requests = res;
      }else{
        this.alert.alertError("Busquedas sin resultados ")
      }
    
     
    });
  }

  show(idSoli: string){
    this.alert.alertSuccess("RESPUESTAS")
  }

  edit(idSoli: string){
    this.router.navigateByUrl('/edit/request/'+idSoli);
  }
}
