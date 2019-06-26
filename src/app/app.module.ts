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
  ],
  imports: [    FormsModule,

    BrowserModule,
    SwiperModule,
    HttpClientModule,
    AngularDualListBoxModule,
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
