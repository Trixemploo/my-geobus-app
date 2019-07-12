import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { ArticleService } from '../article.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-objet-article',
  templateUrl: './objet-article.component.html',
  styleUrls: ['./objet-article.component.css']
})
export class ObjetArticleComponent implements OnInit {

  articles;

  constructor(
    public arti: ArticleService,
    private logs: LoginService,
  ) { }

  ngOnInit() {
    this.arti.getArticles();
  }

  public config: SwiperConfigInterface = {
    a11y: true,
    direction: 'horizontal',
    slidesPerView:1,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: true,
    pagination: true,
  };

}
