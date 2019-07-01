import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-objet-login',
  templateUrl: './objet-login.component.html',
  styleUrls: ['./objet-login.component.css']
})
export class ObjetLoginComponent implements OnInit {
  username;
  password;

  constructor(
    private loginService : LoginService
  ) { }

  ngOnInit() {
  }

}
