import { Component, OnInit } from '@angular/core';
import { LobsgeneralService } from '../lobsgeneral.service';

@Component({
  selector: 'app-objet-etat',
  templateUrl: './objet-etat.component.html',
  styleUrls: ['./objet-etat.component.css']
})
export class ObjetEtatComponent implements OnInit {

  constructor(
    private lobsgeneralService: LobsgeneralService,
  ) { }

  o(oo){
    return Object.keys(oo)
  }

  ngOnInit() {
    this.lobsgeneralService.getLobs();
  }

}
