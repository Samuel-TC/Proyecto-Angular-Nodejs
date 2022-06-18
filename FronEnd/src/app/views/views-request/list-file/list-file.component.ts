import { Component, OnInit, VERSION, ViewChild, ElementRef  } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'

import {  UserI } from '../../../models/user.interface';
import {  RequestI } from '../../../models/request.interface'
import {  FileI } from '../../../models/file.interface'

import { RequestService } from '../../../services/request/request.service';
import { AlertsService } from '../../../services/alerts/alerts.service';

@Component({
  selector: 'app-list-file',
  templateUrl: './list-file.component.html',
  styleUrls: ['./list-file.component.scss']
})
export class ListFileComponent implements OnInit {

  constructor(private router:Router, private apiR: RequestService, private alert: AlertsService, private active:ActivatedRoute) { }

  errorStatus = false;
  errorMs='';
  dataRequest:RequestI | any;

  files:FileI[]=[];

  //Values
  archivo: string="";
  read:any =""

  ngOnInit(): void {
    this.apiR.getAllFiles( this.active.snapshot.paramMap.get('id'),this.getToken()).subscribe(res =>{
      this.files=res;
      console.log(this.files)
    });

  }
  getToken(){
    return localStorage.getItem('token');
  }

  deleteFile(id:string){
    this.apiR.deleteFileById(id, this.getToken()).subscribe(res=>{});
    
    this.apiR.getAllFiles( this.active.snapshot.paramMap.get('id'),this.getToken()).subscribe(res =>{
      this.files=res;
      console.log(this.files)
    });

    this.apiR.getAllFiles( this.active.snapshot.paramMap.get('id'),this.getToken()).subscribe(res =>{
      this.files=res;
      console.log(this.files)
    });
  
  }
  descargar(id:string){
    this.files.forEach(data =>{
      if(data.idArchivo==id){
          window.open(data.archivo)?.document.write('<iframe src="' + data.archivo  + '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>');
      }
    })
  }

}
