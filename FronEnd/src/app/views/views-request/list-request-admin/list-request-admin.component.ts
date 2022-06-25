import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from '../../../services/request/request.service';
import { AlertsService } from '../../../services/alerts/alerts.service';

import { RequestI } from '../../../models/request.interface'

@Component({
  selector: 'app-list-request-admin',
  templateUrl: './list-request-admin.component.html',
  styleUrls: ['./list-request-admin.component.scss']
})
export class ListRequestAdminComponent implements OnInit, OnDestroy {

  //List REQUEST
  requests: RequestI[] = [];

  constructor(private api: RequestService, private router: Router, private alert: AlertsService) { }

  ngOnDestroy(): void {
    
  }

  ngOnInit(): void {

    let token = this.getToken();
    this.api.getAllRequest(token).subscribe(res => {
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
    this.alert.alertConfim('Estás seguro que desea eliminar esta solicitud?', 'Eliminar solicitud', 'Eliminado', 'Eliminar', (confirm => {
      console.log(confirm);
      if (confirm) {
        this.api.deleteRequestById(id, this.getToken()).subscribe(data => {
          console.log("Eliminado");
        })
        this.api.getAllRequest(this.getToken()).subscribe(res => {
          this.requests = res;

        });

        this.api.getAllRequest(this.getToken()).subscribe(res => {
          this.requests = res;

        });
        this.alert.alertSuccess('Deleted!');

      }
    }));
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

  response(id: string) {
    this.router.navigate(['response', id])
  }

}
