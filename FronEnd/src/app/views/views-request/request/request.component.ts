import { Component, OnInit, VERSION, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ClasificadorI } from '../../../models/clasificador.interface';
import { UserI } from '../../../models/user.interface';
import { RequestI } from '../../../models/request.interface';
import { FileI } from '../../../models/file.interface';

import { RequestService } from '../../../services/request/request.service';
import { UserService } from '../../../services/user/user.service';
import { AlertsService } from '../../../services/alerts/alerts.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {

  constructor(private router: Router, private apiU: UserService, private apiR: RequestService, private alert: AlertsService) { }

  errorStatus = false;
  errorMs = '';
  dataRequest: RequestI | any;

  users: UserI[] = [];
  clasificadores: ClasificadorI[] = [];

  //Values
  archivo: string = "";
  read: any = ""

  rool: string;


  name = 'Angular ' + VERSION.major;
  @ViewChild('comentario') comentario: ElementRef;
  @ViewChild('linea') linea: ElementRef;

  //Validad Campos requeridos
  newForm = new FormGroup({
    palabraClave: new FormControl('', [Validators.required]),
    asuntoDetallado: new FormControl('', [Validators.required]),
    idClasificador: new FormControl('', [Validators.required]),

  });
  ngOnInit(): void {

    this.rool = localStorage.getItem('rool')

    this.apiU.getAllUsers(1, this.getToken()).subscribe(res => {
      this.users = res;
    });

    this.apiR.getAllClasificadores(this.getToken()).subscribe(res => {
      this.clasificadores = res;
    });
  }

  //POST REQUEST
  postForm(form: RequestI) {

    const id = localStorage.getItem("idUsuario");
    form.idUsuario = id;
    console.log(form);

    if (this.newForm.valid) {
      this.apiR.postRequest(form, this.getToken()).subscribe(data => {
        console.log(data)
      });
      let file = {
        archivo: this.read,
        comentario: this.comentario.nativeElement.value,
        linea: "temp",
        idSolicitud: 0
      };
      this.apiR.postFile(file, this.getToken()).subscribe(data => {

      })

      if (this.rool == '2') {
        this.router.navigate(['list/request/admin']);
      } else {
        this.router.navigate(['list/request/user']);
      }
    } else {
      this.errorStatus = true;
      this.errorMs = "Ingrese todos los campos!"
    }
  }

  getToken() {
    return localStorage.getItem('token');
  }

  handleUpload(event: any) {

    const file = event.target.files[0];

    if (file.size <= 50000) {

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.read = reader.result;
      };
    } else {
      this.alert.alertError("El archivo es demasiado pesado");
    }
  }

  exit() {
    
    if (this.rool == '2') {
      this.router.navigate(['list/request/admin']);
    } else {
      this.router.navigate(['list/request/user']);
    }
  }

}
