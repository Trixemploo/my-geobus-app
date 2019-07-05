import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders }    from '@angular/common/http';
import { headersToString } from 'selenium-webdriver/http';
import { LobsService } from './lobs.service';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    private lobs: LobsService,
    ) { 
      this._islogged = false;
      this._badPassword = false;
    }

    public _username;
    public _password;
    public _remember;
    public _islogged;
    public _badPassword;

    public Rememberlogs(){
      localStorage.setItem("username",JSON.stringify(this._username));
      localStorage.setItem("password",JSON.stringify(this._password));
      localStorage.setItem("remember",JSON.stringify(this._remember));
    }

    public RemindLogs(){
      if(localStorage.getItem("username") != "off"  && localStorage.getItem("password")!= "off" && localStorage.getItem("username") && localStorage.getItem("password") && localStorage.getItem("remember") && localStorage.getItem("remember") != "off"){
        this._username=JSON.parse(localStorage.getItem("username"));
        this._password=JSON.parse(localStorage.getItem("password"));
        this._remember=JSON.parse(localStorage.getItem("remember"));
        this.login(this._username,this._password,this._remember);
        console.log(this._username,this._password,this._remember,"2");
      }
      console.log(this._username,this._password,this._remember,"3");
    }
    
    public Forgetlogs(){
      localStorage.setItem("username","off");
      localStorage.setItem("password","off");
      localStorage.setItem("remember","off");
      this._remember = null;
    }

    public login(username,password,remember){
      this._username = username;
      this._password = password;
      this._remember = remember;
      // this._islogged = true;
      let header = new HttpHeaders({'Content-Type': 'application/json'});
      header.append('Authorization', 'Bearer d22e9ba9-d20d-3593-9177-32ce64e55cf3');

      console.log(username,password);
      this.http.post("http://my.geobus.services:8999/gest/rest/user/login",{"login":username, "password":password},
      {headers:header, withCredentials:true})
      .subscribe(
        r =>{
          this.lobs.getfavs();
          this._islogged = true;
          this._badPassword = false;
          if(this._remember){
            this.Rememberlogs();
          }
          else
           this.Forgetlogs();
        },
        e=>{this._islogged = false;
          this._badPassword = true
          this.Forgetlogs();
          console.log("disconnected")});
    }
}
