import { Component, OnInit, NgModule } from '@angular/core';
import { HttpClient }    from '@angular/common/http';
import { AppsService } from '../apps.service';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-objet-image',
  templateUrl: './objet-image.component.html',
  styleUrls: ['./objet-image.component.css']
})
export class ObjetImageComponent implements OnInit {

  ngOnInit() {
  }

  ngAfterViewInit(){
    //this.appsService.get();
    // this.list=JSON.parse(localStorage.getItem("list"));
    // this.list2=JSON.parse(localStorage.getItem("list2"))
  }

  constructor(
    private http: HttpClient,
    private appsService:AppsService) { }
    // apps = [];
    // list = [];
    // list2 =[];
    // save(){
    //   localStorage.setItem("list",JSON.stringify(this.list));
    //   localStorage.setItem("list2",JSON.stringify(this.list2))
    // }
    // get(){
    //   this.http.get<[]>("http://localhost:8999/applications").subscribe(
    //     r=>{
    //       this.apps=r;
    //       for(let a of this.apps)
    //         this.list.push(a.nom)
    //       console.log(r);
    //       console.log(this.list);
    //     }
    //   );
    // }
    public config: SwiperConfigInterface = {
      a11y: true,
      direction: 'horizontal',
      slidesPerView:5,
      keyboard: true,
      mousewheel: true,
      scrollbar: false,
      navigation: true,
      pagination: true,
    };
}
