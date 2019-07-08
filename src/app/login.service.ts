import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders }    from '@angular/common/http';
import { headersToString } from 'selenium-webdriver/http';
import { StatsService } from './stats.service';
import { LobsgeneralService } from './lobsgeneral.service';
import { LobsService } from './lobs.service';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    private stats: StatsService,
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
    public _key;

    public Rememberlogs(){
      localStorage.setItem("username",JSON.stringify(this._username));
      localStorage.setItem("password",JSON.stringify(this._password));
      localStorage.setItem("remember",JSON.stringify(this._remember));
      localStorage.setItem("sid",JSON.stringify(this._key));
    }

    public RemindLogs(){
      if(localStorage.getItem("username") != "off"  && localStorage.getItem("password")!= "off" && localStorage.getItem("username") && localStorage.getItem("password") && localStorage.getItem("remember") && localStorage.getItem("remember") != "off"){
        this._username=JSON.parse(localStorage.getItem("username"));
        this._password=JSON.parse(localStorage.getItem("password"));
        this._remember=JSON.parse(localStorage.getItem("remember"));
        this._key=JSON.parse(localStorage.getItem("sid"));
        this.login(this._username,this._password,this._remember);
        console.log(this._username,this._password,this._remember,"2");
      }
      console.log(this._username,this._password,this._remember,"3");
    }
    
    public Forgetlogs(){
      localStorage.setItem("username","off");
      localStorage.setItem("password","off");
      localStorage.setItem("remember","off");
      localStorage.setItem("sid","off");
      this._remember = null;
    }

    public login(username,password,remember){
      this._username = username;
      this._password = password;
      this._remember = remember;
      let header = new HttpHeaders({'Content-Type': 'application/json'});
      header.append('Authorization', 'Bearer d22e9ba9-d20d-3593-9177-32ce64e55cf3');

      console.log(username,password);
      this.http.post("https://apm-gateway-val-rct.extranet.geodis.org/t/geobus.corp.geodis.org/gest/VALproxy/gest/rest/user/login",{"login":username, "password":password},
      {headers:header, withCredentials:true})
      .subscribe(
        r =>{
          this._key = r;
          // this.sleep();
          this._islogged = true;
          this._badPassword = false;
          if(this._remember){
            this.Rememberlogs();
          }
          else
           this.Forgetlogs();
          this.stats._sidkey = r;
          this.stats.getStats();
          this.lobs._sidkey = r;
          this.lobs.getfavs();
        },
        e=>{this._islogged = false;
          this._badPassword = true
          this.Forgetlogs();
          console.log("disconnected")});
    }

//     async delay(ms: number) {
//       await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
//   }

//   sleep(){
//     this.delay(150).then(any=>{
//     this.lobs.getfavs(this._key);
//  });
//  }
}
