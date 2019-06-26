import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LobsService {

  constructor() { }
  getLobsAttributes(){
    console.log(Object.keys(this.getLobs[0]));
    return Object.keys(this.getLobs[0]);
  }

  getLobs() {
    return [

      {  "lob" : "D&E",
      
      "abandonManuel" : 12,
      
      "KO" : 32,
      
      "OK" : 4564465,
      
      "okManuel" : 12,
      
      "pending" : 1,
      
      },
      
      {  "lob" : "LOGISTICS",
      
      "abandonManuel" : 12,
      
      "KO" : 32,
      
      "OK" : 4564465,
      
      "okManuel" : 12,
      
      "pending" : 1,
      
      },
      
      {  "lob" : "GSCO",
      
      "abandonManuel" : 12,
      
      "KO" : 32,
      
      "OK" : 4564465,
      
      "okManuel" : 12,
      
      "pending" : 1,
      
      },
      
      {  "lob" : "CORPORATE",
      
      "abandonManuel" : 12,
      
      "KO" : 32,
      
      "OK" : 4564465,
      
      "okManuel" : 12,
      
      "pending" : 1,
      
      },
      
      {  "lob" : "FREIGHT FORWARDING",
      
      "abandonManuel" : 12,
      
      "KO" : 32,
      
      "OK" : 4564465,
      
      "okManuel" : 12,
      
      "pending" : 1,
      
      }
      
      ];
  }
}
