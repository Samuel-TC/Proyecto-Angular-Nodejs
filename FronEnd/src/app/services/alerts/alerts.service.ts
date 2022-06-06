import { Injectable } from '@angular/core';
import  Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor() { }

  alertError(description:string): void {
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: description,
      showConfirmButton: false,
      timer: 1500,
      confirmButtonColor: '#000000',
      cancelButtonColor: '#000000',
      iconColor: '#ffffff',
      color: '#ffffff',
      background: '#090521',
    })
  }

  alertSuccess(description:string): void {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: description,
      showConfirmButton: false,
      timer: 1500,
      confirmButtonColor: '#000000',
      cancelButtonColor: '#000000',
      iconColor: '#ffffff',
      color: '#ffffff',
      background: '#090521',
    })
  }

}
