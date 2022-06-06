import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertsService } from '../../services/alerts/alerts.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor( private router: Router, private alert: AlertsService ) { }

  ngOnInit(): void {

  }

  exit(){//seccion
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    this.router.navigate(['login'])
    this.alert.alertError("Logout!");
  }

}
