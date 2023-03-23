import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {

  isLoggedIn: boolean = false;

  loggedIn(){
    this.isLoggedIn = true;
  }

  ngOnInit(): void {}

  title = 'angular-app';

}
