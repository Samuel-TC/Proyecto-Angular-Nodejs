import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'

import { UserI } from '../../../models/user.interface';
import {  SexI } from '../../../models/sex.interface';

import { UserService } from '../../../services/user/user.service';
import { AlertsService } from '../../../services/alerts/alerts.service';
import { DistrictI } from '../../../models/distric.interface';
import { DepartmentI } from '../../../models/department.interface';

import { DepartmentService } from '../../../services/department/department.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  constructor(private router:Router, private apiDepartment: DepartmentService, private alert: AlertsService, private active:ActivatedRoute, private apiUser: UserService) { }


  read:any =""
  errorStatus =false
  errorMs=''
  distritos:DistrictI[]=[];
  departamentos:DepartmentI[]=[];
  sexos:SexI[]=[];
  datauser: UserI;

  editForm = new FormGroup({
    nombre:new FormControl('',[Validators.required]),
    apellido1:new FormControl('',[Validators.required]),
    apellido2:new FormControl('',[Validators.required]),
    idSexo:new FormControl('',[Validators.required]),
    cedula:new FormControl('',[Validators.required]),
    fechaNacimiento:new FormControl('',[Validators.required]),
    idDepartamento:new FormControl('',[Validators.required]),
    correo:new FormControl('',[Validators.required]),
    celular:new FormControl('',[Validators.required]),
    idDistrito:new FormControl('',[Validators.required]),
  });

  ngOnInit(): void {
  
    this.apiDepartment.getAllDistric(this.getToken()).subscribe(res =>{
      this.distritos=res;
    });
    this.apiUser.getAllSex(this.getToken()).subscribe(res=>{
      this.sexos=res;
    })

    this.apiDepartment.getAllDepartment( this.getToken()).subscribe(data => {
      this.departamentos = data;   
  })
  
  let id = this.active.snapshot.paramMap.get('id');
  this.apiUser.getUserById(id,this.getToken()).subscribe(data=>{
    this.editForm.setValue({
      nombre:data.nombre,
      apellido1:data.apelllido1,
      apellido2:data.apelllido2,
      idSexo:data.idSexo,
      cedula:data.cedula,
      fechaNacimiento:data.fechaNacimiento,
      idDepartamento:data.idDepartamento,
      correo:data.correo,
      celular:data.celular,
      idDistrito:data.idDistrito,
    })
  })
  
  }

  putForm(form:UserI){
    let cedula = this.active.snapshot.paramMap.get('id');
    if (this.editForm.valid ) {
    console.log(cedula)
    form.cedula=cedula;
    this.apiUser.updateUserById(form, this.getToken()).subscribe(data => {
    });
    this.alert.alertSuccess('Edited User!');
    this.router.navigate(['list/user']);
  } else {
    
    this.errorStatus = true;
    this.errorMs = "Ingrese todos los campos!"
  }
  }

  getToken(){
    return localStorage.getItem('token');
  }
}
