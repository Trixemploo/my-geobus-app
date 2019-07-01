import { Component } from '@angular/core';
import { HttpClient }    from '@angular/common/http';
import { element } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'my-app';
  h=false;
  m=false;

  a=false;
  b=false;

  islogged = false;

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
