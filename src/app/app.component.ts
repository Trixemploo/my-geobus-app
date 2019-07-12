import { Component } from '@angular/core';
import { HttpClient }    from '@angular/common/http';
import { element } from 'protractor';
import { LoginService } from './login.service';
import { CookieService } from 'ngx-cookie-service';
import { StatsService } from './stats.service';
import { ArticleService } from './article.service';
import { DefilanteService } from './defilante.service';
import { LobsService } from './lobs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    public logs: LoginService,
    private cookieService: CookieService,
    public stats: StatsService,
    private arti: ArticleService,
    private def: DefilanteService,
    private lobs: LobsService,
  ){}

  ngOnInit(){
    this.logs.RemindLogs();
    console.log(this.logs._username,this.logs._password,this.logs._remember,"1");
    setInterval(this.stats.getStats.bind(this.stats), 60000);
    setInterval(this.lobs.getfavs.bind(this.lobs), 60000);
    // setInterval(this.stats.getStats(), 500);
  }


  intervalId;
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
