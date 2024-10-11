import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  name:any;
  usertype:any;

  constructor(private router:Router)
  {}
  ngOnInit(): void {
    this.name = localStorage.getItem('name');
    this.usertype = localStorage.getItem('usertype');
  }

  btnLogout()
  {
    localStorage.clear();
    this.router.navigate(['/'])
  }

}
