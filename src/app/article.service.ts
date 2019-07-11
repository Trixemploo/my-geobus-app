import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }    from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(
    private http: HttpClient,
    ) { }
    public articles;
    public user;

    getArticles() {
      this.http.get<[]>("https://apm-gateway-val-rct.extranet.geodis.org/t/geobus.corp.geodis.org/gest-swaggerised/VAL/articles").subscribe(
        r=>{
          this.articles=r;
          console.log(this.articles[0].title);
        return r;}, e=>console.log("error for articles"))
    }
}
