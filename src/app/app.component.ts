import { Component } from '@angular/core';
import { HttpClient }    from '@angular/common/http';
import { element } from 'protractor';
import { LoginService } from './login.service';
import { CookieService } from 'ngx-cookie-service';
import { StatsService } from './stats.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private logs: LoginService,
    private cookieService: CookieService,
    private stats: StatsService,
  ){}

  ngOnInit(){
    this.logs.RemindLogs();
    console.log(this.logs._username,this.logs._password,this.logs._remember,"1");
  }

  title = 'my-app';
  h=false;
  m=false;

  a=false;
  b=false;

  c=false;
  d=false;

  Disconnect(){
    this.logs._islogged = false;
    this.logs.Forgetlogs();
    this.cookieService.deleteAll();
    console.log("disconnected")
  }

  clickOutsidediv(){
    if(this.h)
      this.h =false;
    if(this.a)
      this.a =false;
    
    return;
  }

  onClickedOutside(e: Event) {
    console.log('Clicked outside:', e);
    if(!this.m){
      this.h = true;
      this.m = true;
    }
    else{
      this.h = false;
    }
  }

  onClickedOutsideAbout(e: Event) {
    console.log('Clicked outside:', e);
    if(!this.d){
      this.c = true;
      this.d = true;
    }
    else{
      this.c = false;
    }
  }

  onClickedOutside2(e: Event) {
    console.log('Clicked outside:', e);

    if(!this.b){
      this.a = true;
      this.b = true;
    }
    else{
      this.a = false;
    }
  }

}
