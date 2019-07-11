import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ObjetImageComponent } from './objet-image/objet-image.component';
import { ObjetMenuComponent } from './objet-menu/objet-menu.component';

import { AngularDualListBoxModule } from 'angular-dual-listbox';
import { ObjetSettingsComponent } from './objet-settings/objet-settings.component';

import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { ObjetLobsComponent } from './objet-lobs/objet-lobs.component';

import { ClickOutsideModule } from 'ng-click-outside';
import { ObjetLoginComponent } from './objet-login/objet-login.component';
import { ObjetEtatComponent } from './objet-etat/objet-etat.component';

import { CookieService } from 'ngx-cookie-service';
import { ObjetArticleComponent } from './objet-article/objet-article.component';

 
const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  declarations: [
    AppComponent,
    ObjetImageComponent,
    ObjetMenuComponent,
    ObjetSettingsComponent,
    ObjetLobsComponent,
    ObjetLoginComponent,
    ObjetEtatComponent,
    ObjetArticleComponent,
  ],
  imports: [    
    FormsModule,
    BrowserModule,
    SwiperModule,
    HttpClientModule,
    AngularDualListBoxModule,
    ClickOutsideModule,
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    },
    CookieService,
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { 

}
