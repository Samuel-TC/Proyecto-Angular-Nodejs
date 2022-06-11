import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService  } from '../../../services/user/user.service';
import {  AlertsService } from '../../../services/alerts/alerts.service';

import { Subject } from 'rxjs';
import { UserI } from '../../../models/user.interface'

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit,OnDestroy {

  constructor( private api: UserService, private router: Router, private alert: AlertsService ) { }

  Pag:any=1;
  users: UserI[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger:any = new Subject();

  ngOnDestroy(): void {

  }

  ngOnInit(): void {
    this.dtOptions={
      pagingType: 'full_numbers',
      pageLength:8,
      language:{
        url:'//cdn.datatables.net/plug-ins/1.10.21/i18n/Spanish.json'
      }
    }
    this.api.getAllUsers(this.Pag,this.getToken()).subscribe(res => {
      this.users = res;
      this.dtTrigger.next();
    });
  }

  editUser(id:string){
    //this.alert.alertSuccess("si");
    this.router.navigate(['edit/user',id])
  }

  deleteUser(id:string){
    this.api.deleteUserById(id,this.getToken()).subscribe(data=>{
      console.log("Eliminado");
    })
    this.api.getAllUsers(this.Pag,this.getToken()).subscribe(res => {
      this.users = res;
      this.dtTrigger.next();
    });
    this.alert.alertSuccess("Deleted User!")
  }

  addUser(){
    
  }

  sig(){
    this.Pag = this.Pag+1
    this.api.getAllUsers(this.Pag,this.getToken()).subscribe(res => {
      this.users = res;
      this.dtTrigger.next();
    });
  }
  ant(){
    if(this.Pag-1>0){
      this.Pag = this.Pag-1
      this.api.getAllUsers(this.Pag,this.getToken()).subscribe(res => {
        this.users = res;
        this.dtTrigger.next();
      });
    }
  }

  getToken() {
    return localStorage.getItem('token');
  }

}
