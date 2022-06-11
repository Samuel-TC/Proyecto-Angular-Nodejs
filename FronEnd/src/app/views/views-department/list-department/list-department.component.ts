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
  dtOptions: DataTables.Settings = {};
  dtTrigger: any = new Subject();

  constructor(private api: DepartmentService, private router: Router, private alert: AlertsService) { }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 8,
      language: {
        url: '//cdn.datatables.net/plug-ins/1.10.21/i18n/Spanish.json'
      }
    }
    let token = this.getToken();
    this.api.getAllDepartment(token).subscribe(res => {
      this.departments = res;
      this.dtTrigger.next();
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
    this.api.deleteDepartmentById(id, this.getToken()).subscribe(data => {
      console.log("Eliminado");
    })
    this.api.getAllDepartment(this.getToken()).subscribe(res => {
      this.departments = res;
      this.dtTrigger.next();
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

}
