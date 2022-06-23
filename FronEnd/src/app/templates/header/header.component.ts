import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { bottom, left } from '@popperjs/core';
import { AlertsService } from '../../services/alerts/alerts.service'
import { RouterLinkActive } from '@angular/router';

import { UserService } from '../../services/user/user.service';
import { UserI } from '../../models/user.interface'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private alert: AlertsService, private userApi: UserService) { }

  value: any = '';
  rool: string = "";
  foto:any;

  ngOnInit(): void {
   
    this.value = localStorage.getItem("id");
    this.rool = localStorage.getItem("rool");
    this.validateIMG();
    
  }

  exit() {//seccion
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    localStorage.removeItem("foto");
    localStorage.removeItem("idUsuario");
    this.router.navigate(['login'])
    this.alert.alertError("Logout!");
  }

  department() {
    this.router.navigate(['list/department'])
  }

  user() {
    this.router.navigate(['list/user'])
  }

  menu() {
    this.router.navigate(['menu'])
  }

  request() {
    if (this.rool == '1') {
      this.router.navigate(['list/request/user']);
    } else {
      this.router.navigate(['list/request/admin']);
    }
  }

  //Upload  IMG
  loadImg() {
    this.userApi.getUserByIdIMG(localStorage.getItem('idUsuario'),this.getToken()).subscribe( res=>{
        if(res.foto!=null){
          this.foto = res.foto;
          localStorage.setItem("foto",this.foto);
        }else{
          this.foto = null
        }
      
    });
  }

  //GET TOKEN
  getToken() {
    return localStorage.getItem('token');
  }

  // VALIDATE  img
  validateIMG(){

    if(localStorage.getItem('foto')==null){
      this.loadImg();
    }else{
      if(localStorage.getItem('foto')!=null){}
      this.foto= localStorage.getItem('foto');
      console.log("Cargada")
    }
  }
}
