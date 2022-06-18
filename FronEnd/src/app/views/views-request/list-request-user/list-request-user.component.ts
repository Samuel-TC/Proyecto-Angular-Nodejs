import { Component, OnInit, OnDestroy } from '@angular/core';
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

  //List REQUEST
  requests: RequestI[] = [];

  constructor(private api: RequestService, private router: Router, private alert: AlertsService) { }

  ngOnDestroy(): void {
    
  }

  ngOnInit(): void {

    let token = this.getToken();
    this.api.getRequestByIdUser(localStorage.getItem("idUsuario"),token).subscribe(res => {
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
    this.api.getRequestByIdUser(localStorage.getItem("idUsuario"),this.getToken()).subscribe(res => {
      this.requests = res;
     
    });

    this.api.getRequestByIdUser(localStorage.getItem("idUsuario"),this.getToken()).subscribe(res => {
      this.requests = res;
     
    });
    
    this.alert.alertSuccess('Deleted Departmanet!');

  }

  getToken() {
    return localStorage.getItem('token');
  }

  ant() {

  }

  sig() {

  }

  verArchivos(id:string){
    this.router.navigateByUrl('request/files/'+id);
  }


}
