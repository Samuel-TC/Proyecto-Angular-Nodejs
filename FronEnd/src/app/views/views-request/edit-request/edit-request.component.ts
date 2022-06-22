import { Component, OnInit, VERSION, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'

import { ClasificadorI } from '../../../models/clasificador.interface';
import { UserI } from '../../../models/user.interface';
import { RequestI } from '../../../models/request.interface'

import { UserService } from '../../../services/user/user.service';
import { RequestService } from '../../../services/request/request.service';
import { AlertsService } from '../../../services/alerts/alerts.service';

@Component({
  selector: 'app-edit-request',
  templateUrl: './edit-request.component.html',
  styleUrls: ['./edit-request.component.scss']
})
export class EditRequestComponent implements OnInit {

  constructor(private router: Router, private apiR: RequestService, private alert: AlertsService, private active: ActivatedRoute, private apiUser: UserService) { }

  errorStatus = false;
  errorMs = '';
  dataRequest: RequestI | any;

  users: UserI[] = [];
  clasificadores: ClasificadorI[] = [];

  //Values
  archivo: string = "";
  read: any = ""

  name = 'Angular ' + VERSION.major;
  @ViewChild('comentario') comentario: ElementRef;
  @ViewChild('linea') linea: ElementRef;

  //Validad Campos requeridos
  editForm = new FormGroup({
    palabraClave: new FormControl('', [Validators.required]),
    asuntoDetallado: new FormControl('', [Validators.required]),
    idClasificador: new FormControl('', [Validators.required]),

  });

  ngOnInit(): void {

    this.apiUser.getAllUsers(1, this.getToken()).subscribe(res => {
      this.users = res;
    });

    this.apiR.getAllClasificadores(this.getToken()).subscribe(res => {
      this.clasificadores = res;
    });

    let id = this.active.snapshot.paramMap.get('id');
    this.apiR.getRequestById(id, this.getToken()).subscribe(data => {
      this.editForm.setValue({
        palabraClave: data.palabraClave,
        asuntoDetallado: data.asuntoDetallado,
        idClasificador: data.idClasificador,
      })
    })

  }

  //POST REQUEST
  putForm(form: RequestI) {

    let idS = this.active.snapshot.paramMap.get('id');

    const id = localStorage.getItem("idUsuario");
    form.idUsuario = id;
    form.idSolicitud = idS;

    console.log(form);

    if (this.editForm.valid) {
      this.alert.alertConfim('Estás seguro que desea editar esta solicitud?', 'Editar Solicitud', 'Editado', 'Editar', (confirm => {
        console.log(confirm);
        if (confirm) {
          this.apiR.updateRequesttById(form, this.getToken()).subscribe(data => {
            console.log(data)
          });
          console.log(this.read);
          this.archivo = this.read;
          if (this.archivo == "") {
            console.log("Sin Archivo")
          } else {
            console.log(idS);
            let file = {
              archivo: this.read,
              comentario: this.comentario.nativeElement.value,
              linea: "temp",
              idSolicitud: idS
            };
            this.apiR.postFile(file, this.getToken()).subscribe(data => { })
          }
          this.router.navigate(['list/request/admin']);
        }
      }));
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

}
