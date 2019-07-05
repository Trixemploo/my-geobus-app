import { Injectable } from '@angular/core';
import { HttpClient }    from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LobsgeneralService {
  public lobs = [];

  constructor(
    private http: HttpClient,
  ) { }
  getLobsAttributes(){
    console.log(Object.keys(this.getLobs[0]));
    return Object.keys(this.getLobs[0]);
  }

  getLobs() {
      this.http.get<[]>("http://10.0.67.232:8999/stats").subscribe(
        r=>{this.lobs = r;
          console.log("A");
          console.log(this.lobs);
         // return this.lobs;
        },e=>console.log("Z")
      );
  }
}
