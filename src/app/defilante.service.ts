import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders }    from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DefilanteService {

  constructor(
    private http : HttpClient,
  ) { }

  public _user;
  public defilante;

  getdefilante(){
    this.http.get<[]>("https://apm-gateway-val-rct.extranet.geodis.org/t/geobus.corp.geodis.org/gest-swaggerised/VAL/dashboard/messages?profileid="+this._user.profiles[0].id,{headers: {sid:this._user.sid}, withCredentials:true}).subscribe(
        r=>{
          console.log(this._user.profiles.id)
        this.defilante=r;
      }, 
        e=>
        console.log("error for defilante"))
        console.log(this._user.profiles.id)
  }
}
