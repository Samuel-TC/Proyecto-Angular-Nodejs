import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user/user.service';
import { AlertsService } from '../../../services/alerts/alerts.service';

import { Subject } from 'rxjs';
import { UserI } from '../../../models/user.interface'

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit, OnDestroy {

  constructor(private api: UserService, private router: Router, private alert: AlertsService) { }

  Pag: any = 1;
  users: UserI[] = [];


  ngOnDestroy(): void {

  }

  ngOnInit(): void {
    this.api.getAllUsers(this.Pag, this.getToken()).subscribe(res => {
      this.users = res;

    });
  }

  //EDIT USER
  editUser(id: string) {
    //this.alert.alertSuccess("si");
    this.router.navigate(['edit/user', id])
  }

  //DELETE USER
  deleteUser(id: string) {
    this.alert.alertConfim('Estás seguro que desea eliminar este usuario?', 'Eliminar usuario', 'Eliminado', 'Eliminar', (confirm => {
      console.log(confirm);

      if (confirm) {
        this.api.deleteUserById(id, this.getToken()).subscribe(data => {
          console.log("Eliminado");
        })

        this.api.getAllUsers(this.Pag, this.getToken()).subscribe(res => {
          this.users = res;
        });
      }
    }));
  }

  //ADD USER
  addUser() {

  }

  //SIG PAG
  sig() {
    this.Pag = this.Pag + 1
    this.api.getAllUsers(this.Pag, this.getToken()).subscribe(res => {
      this.users = res;

    });
  }

  //AND PAG
  ant() {
    if (this.Pag - 1 > 0) {
      this.Pag = this.Pag - 1
      this.api.getAllUsers(this.Pag, this.getToken()).subscribe(res => {
        this.users = res;

      });
    }
  }

  //GET TOKEN
  getToken() {
    return localStorage.getItem('token');
  }

}
