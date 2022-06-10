import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'FronEnd';

  constructor( private route: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
    if(!localStorage.getItem("token")){
      this.router.navigate(['login'])
    }
  }

}
