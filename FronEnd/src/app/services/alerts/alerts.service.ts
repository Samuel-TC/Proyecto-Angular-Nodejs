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

  alertConfim(description: string, title: string, name: string, smsButton: string, callback: Function): any{

    var confirm:boolean = false;

    Swal.fire({
      title: title,
      text: description,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#000000',
      cancelButtonColor: '#000000',
      iconColor: '#ffffff',
      color: '#ffffff',
      background: '#090521',
      confirmButtonText: smsButton

    }).then((result) => {
      
      if (result.isConfirmed) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: name,
          showConfirmButton: false,
          timer: 1500,
          confirmButtonColor: '#000000',
          cancelButtonColor: '#000000',
          iconColor: '#ffffff',
          color: '#ffffff',
          background: '#090521',
        })
        confirm = true;
        return callback(confirm);
      }
      
    });
    return callback(confirm);
  }

}
