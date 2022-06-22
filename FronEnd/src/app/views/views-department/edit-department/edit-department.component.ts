import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'

import { DepartmentI } from '../../../models/department.interface';
import { ContryI } from '../../../models/contry.interface';
import { ProvinceI } from '../../../models/province.interface';
import { DistrictI } from '../../../models/distric.interface';

import { DepartmentService } from '../../../services/department/department.service';
import { AlertsService } from '../../../services/alerts/alerts.service';

@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html',
  styleUrls: ['./edit-department.component.scss']
})
export class EditDepartmentComponent implements OnInit {

  constructor(private router: Router, private apiDepartment: DepartmentService, private alert: AlertsService, private active: ActivatedRoute) { }

  read: any = ""
  errorStatus = false
  errorMs = ''
  paises: ContryI[] = [];
  distritos: DistrictI[] = [];
  dataDepartment: DepartmentI;

  editForm = new FormGroup({
    descripcion: new FormControl('', [Validators.required]),
    idDistrito: new FormControl('', [Validators.required]),
    idPais: new FormControl('', [Validators.required]),
  });
  ngOnInit(): void {

    let idDepartment = this.active.snapshot.paramMap.get('id');
    console.log(idDepartment);

    this.apiDepartment.getAllDistric(this.getToken()).subscribe(res => {
      this.distritos = res;
    });

    this.apiDepartment.getAllContrys(this.getToken()).subscribe(res => {
      this.paises = res;
    });

    this.apiDepartment.getDepartmentById(idDepartment, this.getToken()).subscribe(data => {
      this.dataDepartment = data;
      this.editForm.setValue({
        descripcion: data.descripcion,
        idDistrito: data.idDistrito,
        idPais: data.idPais
      })
    })
  }

  getToken() {
    return localStorage.getItem('token');
  }

  putForm(form: DepartmentI) {

    let iddepartment = this.active.snapshot.paramMap.get('id');
    if (this.editForm.valid) {
      console.log(form)
      form.idDepartamento = iddepartment;
      this.alert.alertConfim('Estás seguro que desea editar este departamento?', 'Editar Departamento', 'Editado', 'Editar', (confirm => {
        console.log(confirm);
        if (confirm) {
          this.apiDepartment.updateDepartmentById(form, this.getToken()).subscribe(data => {
          });
          this.router.navigate(['list/department']);
        }
      }));
     
    } else {

      this.errorStatus = true;
      this.errorMs = "Ingrese todos los campos!"
    }

  }
}
