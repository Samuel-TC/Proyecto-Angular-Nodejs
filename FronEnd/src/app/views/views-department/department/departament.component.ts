import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router} from '@angular/router';

import { DepartmentI } from '../../../models/department.interface';
import { ContryI } from '../../../models/contry.interface';
import { ProvinceI } from '../../../models/province.interface';
import { DistrictI } from '../../../models/distric.interface';

import { DepartmentService } from '../../../services/department/department.service';
import { AlertsService } from '../../../services/alerts/alerts.service';

@Component({
  selector: 'app-departament',
  templateUrl: './departament.component.html',
  styleUrls: ['./departament.component.scss']
})
export class DepartamentComponent implements OnInit {

  constructor( private router:Router, private apiDepartment: DepartmentService, private alert: AlertsService ) { }

  errorStatus = false;
  errorMs='';
  dataDepartment:DepartmentI | any;

  paises:ContryI[]=[];
  distritos:DistrictI[]=[];

  //Validad Campos requeridos
  newForm = new FormGroup({
    descripcion:new FormControl('',[Validators.required]),
    idDistrito:new FormControl('',[Validators.required]),
    idPais:new FormControl('',[Validators.required]),
  });

  ngOnInit(): void {

    this.apiDepartment.getAllContrys(this.getToken()).subscribe(res =>{
          this.paises=res;
    });

    this.apiDepartment.getAllDistric(this.getToken()).subscribe(res =>{
      this.distritos=res;
    });
    
  }

  postForm(form:DepartmentI){
    if(this.newForm.valid ){
      this.apiDepartment.postDepartment(form,this.getToken()).subscribe( data=>{
        console.log(data)
      });
      this.router.navigate(['list/department']);
    }else{
      
      this.errorStatus=true;
      this.errorMs="Ingrese todos los campos!"
    }
    
  }

  getToken(){
    return localStorage.getItem('token');
  }

}
