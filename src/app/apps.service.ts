import { Injectable } from '@angular/core';
import { HttpClient }    from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppsService {

  constructor(
  private http: HttpClient) { }
    apps=[];
    list=[];
    list2=[]; // LA LISTE A UTILISER POUR L'AFFICHAGE
    coucou;
    save(){
      localStorage.setItem("coucou",this.coucou)

      localStorage.setItem("list",JSON.stringify(this.list));
      localStorage.setItem("list2",JSON.stringify(this.list2))
    }

    selected(){
      let res=[];
      for(let a of this.apps)
        if(this.list2.indexOf(a.nom) > -1)
          res.push(a)
      return res;
    }
    get(){

      this.http.get<[]>("https://apm-gateway-rct.extranet.geodis.org/gest/applications").subscribe(
        r=>{
          this.apps=r;
          if(!localStorage.getItem("list") && !localStorage.getItem("list2"))

          for(let a of this.apps)
            this.list.push(a.nom)
          console.log(r);
          console.log(this.list);
        }
      );

      if(localStorage.getItem("list"))
      this.list=JSON.parse(localStorage.getItem("list"));
  
      if(localStorage.getItem("list2"))
      this.list2=JSON.parse(localStorage.getItem("list2"))
    }
}
