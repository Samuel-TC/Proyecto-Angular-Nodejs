import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit(): void {
    if(!localStorage.getItem("token")){
      this.router.navigate(['login'])
    }
  }

  exit(){
    localStorage.setItem("token", "");
    localStorage.setItem("id","")
    this.router.navigate(['login'])
  }

  newRequest(){
    this.router.navigate(['list/request/user']);
    console.log("Nueva")
  }


}
