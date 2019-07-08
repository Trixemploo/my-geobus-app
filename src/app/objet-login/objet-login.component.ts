import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-objet-login',
  templateUrl: './objet-login.component.html',
  styleUrls: ['./objet-login.component.css']
})
export class ObjetLoginComponent implements OnInit {
  username;
  password;

  constructor(
    private loginService : LoginService,
    private app: AppComponent,
  ) { }

  isChecked(bool){
    if(bool = true)
      return "remember";
    else
      return "off";
  }

  closeWindow(){
    if(!this.loginService._badPassword){
      if(!this.app.b ){
        this.app.a = true;
        this.app.b = true;
      }
      else{
        this.app.a = false;
      }
    }
      console.log(this.loginService._badPassword);
    }

    async delay(ms: number) {
      await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
  }

  sleep(){
    this.delay(200).then(any=>{
      this.closeWindow();
 });
  }

  ngOnInit() {
  }

}
