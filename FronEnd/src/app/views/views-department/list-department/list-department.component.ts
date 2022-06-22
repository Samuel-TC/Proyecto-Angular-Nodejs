import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { DepartmentService } from '../../../services/department/department.service';
import { AlertsService } from '../../../services/alerts/alerts.service';

import { Subject } from 'rxjs';
import { DepartmentI } from '../../../models/department.interface'

@Component({
  selector: 'app-list-department',
  templateUrl: './list-department.component.html',
  styleUrls: ['./list-department.component.scss']
})

export class ListDepartmentComponent implements OnInit, OnDestroy {

  departments: DepartmentI[] = [];


  constructor(private api: DepartmentService, private router: Router, private alert: AlertsService) { }

  ngOnDestroy(): void {

  }

  ngOnInit(): void {

    let token = this.getToken();
    this.api.getAllDepartment(token).subscribe(res => {
      this.departments = res;

    });

  }

  editDepartment(id: string) {
    //this.alert.alertSuccess("si");
    this.router.navigate(['edit/department', id])
  }

  addDepartment() {
    this.router.navigate(['department'])
  }

  deleteDepartment(id: any) {
    this.alert.alertConfim('Estás seguro que desea eliminar este departamento?', 'Eliminar departamneto', 'Eliminado', 'Eliminar', (confirm => {
      console.log(confirm);
      if (confirm) {
        this.api.deleteDepartmentById(id, this.getToken()).subscribe(data => {
          console.log("Eliminado");
        })
        this.api.getAllDepartment(this.getToken()).subscribe(res => {
          this.departments = res;

        });

        this.api.getAllDepartment(this.getToken()).subscribe(res => {
          this.departments = res;

        });
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

}
