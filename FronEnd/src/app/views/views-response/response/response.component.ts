import { Component, OnInit, VERSION, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute} from '@angular/router';

import { UserI } from '../../../models/user.interface';
import { RequestI } from '../../../models/request.interface';

import { RequestService } from '../../../services/request/request.service';
import { UserService } from '../../../services/user/user.service';
import { AlertsService } from '../../../services/alerts/alerts.service';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.scss']
})
export class ResponseComponent implements OnInit {

  constructor(private router:Router, private apiU: UserService,  private apiR: RequestService, private alert: AlertsService, private active: ActivatedRoute) { }

  errorStatus = false;
  errorMs='';
  dataRequest:RequestI | any;

  users:UserI[]=[];

  //Values
  archivo: string="";
  read:any =""


    //Validad Campos requeridos
    newForm = new FormGroup({
      descripcion:new FormControl('',[Validators.required]),
      detalleRespuesta:new FormControl('',[Validators.required]),
    });
  ngOnInit(): void {
  
  }

  //POST REQUEST
  postForm(form:RequestI){

    const id=localStorage.getItem("idUsuario");
    let idS = this.active.snapshot.paramMap.get('id');
    form.idUsuario = id;
    form.idSolicitud= idS;
    console.log(form);

    if(this.newForm.valid ){
      this.apiR.response(form,this.getToken()).subscribe( data=>{
        console.log(data)
      });
      this.router.navigate(['list/request/admin']);
    }else{
      
      this.errorStatus=true;
      this.errorMs="Ingrese todos los campos!"
    }
    
  }

  getToken(){
    return localStorage.getItem('token');
  }

  exit() {
  
      this.router.navigate(['list/request/admin']);
    
  }
}
