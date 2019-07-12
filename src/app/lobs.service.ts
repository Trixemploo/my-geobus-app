import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }    from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LobsService {

  public fluxs = [];

  constructor(private http: HttpClient,
    ) { }
  // getLobsAttributes(){
  //   console.log(Object.keys(this.getLobs[0]));
  //   return Object.keys(this.getLobs[0]);
  // }

  public _sidkey;

  getfavs() {
    if(this._sidkey && this._sidkey!="off")
    this.http.get<[]>("https://apm-gateway-rct.extranet.geodis.org/gest/favoritesexchange?startTime=2018-11-27 00:00:00&endTime=2019-07-27 23:00:00",{headers: {sid:this._sidkey.sid}, withCredentials:true}).subscribe(
      r=>{
        this.fluxs=r;}, e=>console.log("error"))
  }
}

