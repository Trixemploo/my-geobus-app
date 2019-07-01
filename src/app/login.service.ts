import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders }    from '@angular/common/http';
import { headersToString } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient) { }

    public login(username,password){
      let header = new HttpHeaders({'Content-Type': 'application/json'});
      header.append('Authorization', 'Bearer d22e9ba9-d20d-3593-9177-32ce64e55cf3');

      console.log(username,password);
      this.http.post("http://my.geobus.services:8999/gest/rest/user/login",{"login":username, "password":password},{headers:header, withCredentials:true})
      .subscribe(r => console.log(JSON.stringify(r)))
    }
}
