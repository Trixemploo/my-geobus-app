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

  getfavs() {
    let header = new HttpHeaders({'Content-Type': 'application/json'});
    this.http.get<[]>("http://my.geobus.services:8999/gest/rest/favoritesexchange?startTime=2018-11-27%2000:00:00&endTime=2019-06-27%2023:00:00",{headers:header, withCredentials:true}).subscribe(
      r=>{
        this.fluxs=r;}, e=>console.log("error"))
  }
}



// return [

    //   {  "lob" : "D&E",
      
    //   "abandonManuel" : 12,
      
    //   "KO" : 32,
      
    //   "OK" : 4564465,
      
    //   "okManuel" : 12,
      
    //   "pending" : 1,
      
    //   },
      
    //   {  "lob" : "LOGISTICS",
      
    //   "abandonManuel" : 12,
      
    //   "KO" : 32,
      
    //   "OK" : 4564465,
      
    //   "okManuel" : 12,
      
    //   "pending" : 1,
      
    //   },
      
    //   {  "lob" : "GSCO",
      
    //   "abandonManuel" : 12,
      
    //   "KO" : 32,
      
    //   "OK" : 4564465,
      
    //   "okManuel" : 12,
      
    //   "pending" : 1,
      
    //   },
      
    //   {  "lob" : "CORPORATE",
      
    //   "abandonManuel" : 12,
      
    //   "KO" : 32,
      
    //   "OK" : 4564465,
      
    //   "okManuel" : 12,
      
    //   "pending" : 1,
      
    //   },
      
    //   {  "lob" : "FREIGHT FORWARDING",
      
    //   "abandonManuel" : 12,
      
    //   "KO" : 32,
      
    //   "OK" : 4564465,
      
    //   "okManuel" : 12,
      
    //   "pending" : 1,
      
    //   }
      
    //   ];