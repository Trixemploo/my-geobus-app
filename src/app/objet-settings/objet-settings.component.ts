import { Component, OnInit, NgModule } from '@angular/core';
import { HttpClient }    from '@angular/common/http';
import { LobsService } from "../lobs.service";
import { AppsService } from '../apps.service';

@Component({
  selector: 'app-objet-settings',
  templateUrl: './objet-settings.component.html',
  styleUrls: ['./objet-settings.component.css']
})
export class ObjetSettingsComponent implements OnInit {

  ngOnInit() {    
  }

  ngAfterViewInit(){
    this.appsService.get();
    this.appsService.coucou=localStorage.getItem("coucou");
    
    if(localStorage.getItem("list"))
    this.appsService.list=JSON.parse(localStorage.getItem("list"));

    if(localStorage.getItem("list2"))
    this.appsService.list2=JSON.parse(localStorage.getItem("list2"))
  }

  constructor(
    private http: HttpClient,
    private lobsService:LobsService,
    private appsService:AppsService) { }
    // apps;
    // list=[];
    // list2=[];
    // coucou;
    // save(){
    //   localStorage.setItem("coucou",this.coucou)

    //   localStorage.setItem("list",JSON.stringify(this.list));
    //   localStorage.setItem("list2",JSON.stringify(this.list2))
    // }
    // get(){
    //   if(!localStorage.getItem("list") && !localStorage.getItem("list2"))

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
}




