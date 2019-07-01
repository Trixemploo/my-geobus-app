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
    

  }

  constructor(
    private http: HttpClient,
    private lobsService:LobsService,
    private appsService:AppsService) { }
   
}




