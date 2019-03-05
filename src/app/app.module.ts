import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { WorkComponent } from './work/work.component';
import { NgMasonryGridModule } from 'ng-masonry-grid';
import { PersonalComponent } from './personal/personal.component';
import { Work1Component } from './work1/work1.component';
import { DailyComponent } from './daily/daily.component';
import { AnadotComponent } from './anodot/anadot.component';
import { TransfotechComponent } from './transfotech/transfotech.component';
import { MinereyeComponent } from './minereye/minereye.component';
import { ContactComponent } from './contact/contact.component';


import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { NetafimComponent } from './netafim/netafim.component';
import { HysolateComponent } from './hysolate/hysolate.component';
import { DailyDisplayComponent } from './daily-display/daily-display.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    WorkComponent,
    PersonalComponent,
    Work1Component,
    DailyComponent,
    AnadotComponent,
    TransfotechComponent,
    MinereyeComponent,
    ContactComponent,
    NetafimComponent,
    HysolateComponent,
    DailyDisplayComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgMasonryGridModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
