import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }    from '@angular/common/http';
// import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  result;
  public _sidkey;


  body ={"startTime": "2019-07-05T00:00:00.000GMT" , "endTime": "2019-07-05T23:59:59.000GMT" , "hideScrutationExchange": 0}

    setDate(){
      return;
    }

    getStats(){
      var date = new Date(); 
      var day = date.getDate();
      var monthIndex = date.getMonth()+1;
      var year = date.getFullYear();
      this.http.post(
        "https://apm-gateway-val-rct.extranet.geodis.org/t/geobus.corp.geodis.org/gest/VALproxy/gest/rest/statistics/global",
        {"startTime": `${year}-${monthIndex}-${day}T00:00:00.000GMT`, 
        "endTime": `${year}-${monthIndex}-${day}T23:59:59.000GMT`, 
        "hideScrutationExchange": 0},
      {headers: {sid:this._sidkey.sid}, withCredentials:true})
      .subscribe(
        r =>{
          this.result = r;
          console.log(`${year}-${monthIndex}-${day}T00:00:00.000GMT`)
        },
        e=>{console.log("stats error")});
    }


  constructor(
    private http: HttpClient,
    // private logs: LoginService,
  ) { }

}
