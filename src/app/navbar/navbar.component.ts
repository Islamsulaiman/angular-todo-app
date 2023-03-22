import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  name:any;

  percentage: any=0

constructor(private _service: LoginService){}


  ngOnInit(): void {
    this.percentage = this._service.percentage.subscribe(newPer => this.percentage = newPer)
  }

}
