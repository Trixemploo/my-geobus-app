import { Component, OnInit } from '@angular/core';
import { LobsService } from '../lobs.service';

@Component({
  selector: 'app-objet-lobs',
  templateUrl: './objet-lobs.component.html',
  styleUrls: ['./objet-lobs.component.css']
})
export class ObjetLobsComponent implements OnInit {

  constructor(
    private lobsService:LobsService) { }  
    o(oo){
      return Object.keys(oo)
    }
    

  ngOnInit() {
  }

}
