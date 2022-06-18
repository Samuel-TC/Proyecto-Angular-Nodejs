import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { left } from '@popperjs/core';
import { AlertsService } from '../../services/alerts/alerts.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor( private router: Router, private alert: AlertsService ) { }

  value:any='';
  rool:string="";

  ngOnInit(): void {
     this.value =   localStorage.getItem("id");
     this.rool= localStorage.getItem("rool");
  }

  exit(){//seccion
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    this.router.navigate(['login'])
    this.alert.alertError("Logout!");
  }

  department(){
    this.router.navigate(['list/department'])
  }

  user(){
    this.router.navigate(['list/user'])
  }

  menu(){
    this.router.navigate(['menu'])
  }

  request(){
    if(this.rool=='1'){
      this.router.navigate(['list/request/user']);
    }else{
      this.router.navigate(['list/request/admin']);
    }
  }
  

}
