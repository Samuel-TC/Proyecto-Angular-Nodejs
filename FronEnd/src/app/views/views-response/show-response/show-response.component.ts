import { Component, OnInit, VERSION, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'

import { UserI } from '../../../models/user.interface';
import { RequestI } from '../../../models/request.interface'

import { UserService } from '../../../services/user/user.service';
import { RequestService } from '../../../services/request/request.service';
import { AlertsService } from '../../../services/alerts/alerts.service';

@Component({
  selector: 'app-show-response',
  templateUrl: './show-response.component.html',
  styleUrls: ['./show-response.component.scss']
})
export class ShowResponseComponent implements OnInit {

  constructor(private router: Router, private apiR: RequestService, private alert: AlertsService, private active: ActivatedRoute, private apiUser: UserService) { }

  errorStatus = false;
  errorMs = '';
  dataRequest: RequestI | any;

  //User Response
  foto:any;
  idUser: string;

  //Reponse data
  description:string;
  detail: string;
  date: string;

  users: UserI[] = [];

  //Values
  archivo: string = "";
  read: any = ""

  ngOnInit(): void {

    this.loadResponse();
   
  }
      
  getToken() {
    return localStorage.getItem('token');
  }

    //Upload  IMG
    loadImg(idUser :string) {
      this.apiUser.getUserByIdIMG(idUser,this.getToken()).subscribe( res=>{
          if(res.foto == null){
            this.foto = null;
            this.idUser= res.nombre +' '+ res.apelllido1 +' '+ res.apelllido2;
            console.log(res)
          }else{
            this.foto = res.foto;
            this.idUser= res.nombre +' '+ res.apelllido1;
            console.log(res)
          }
      });
    }

  loadResponse(){
    let id = this.active.snapshot.paramMap.get('id');
    this.apiR.getRequestById(id, this.getToken()).subscribe(data => {
      this.loadImg(data.idUsuarioRespuesta);
      if(data.idRespuesta=='1'){
        this.description= 'Pendiente';
      }if (data.idRespuesta=='2') {
        this.description= 'Resuelto';
      } else {
        this.description= 'Ampliar Solicitud';
      }
      this.date = data.fechaHoraRespuesta;
      this.detail= data.detalleRespuesta;
    })
  }

  exit(){
    this.router.navigate(['/list/request/user'])
  }

}
