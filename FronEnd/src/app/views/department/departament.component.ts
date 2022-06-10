import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-departament',
  templateUrl: './departament.component.html',
  styleUrls: ['./departament.component.scss']
})
export class DepartamentComponent implements OnInit {

  constructor() { }

  //Validad Campos requeridos
  loginForm = new FormGroup({
    user: new FormControl('', [Validators.required, Validators.email,Validators.minLength(9),Validators.maxLength(35)],),
    password: new FormControl('', [Validators.required,Validators.minLength(7),Validators.maxLength(20)])
  });

  ngOnInit(): void {
  }

}
