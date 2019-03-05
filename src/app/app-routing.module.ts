import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { WorkComponent } from './work/work.component';
import { PersonalComponent } from './personal/personal.component';
import { Work1Component } from './work1/work1.component';
import { DailyComponent } from './daily/daily.component';
import { AnadotComponent } from './anodot/anadot.component';
import { TransfotechComponent } from './transfotech/transfotech.component';
import { MinereyeComponent } from './minereye/minereye.component';
import { ContactComponent } from './contact/contact.component';
import { NetafimComponent } from './netafim/netafim.component';
import { HysolateComponent } from './hysolate/hysolate.component';
import { DailyDisplayComponent } from './daily-display/daily-display.component';

const routes: Routes = [
  { path: '', component: WorkComponent, pathMatch: 'full' },
  { path: 'nav', component: NavComponent },
  { path: 'work', component: WorkComponent },
  { path: 'personal', component: PersonalComponent },
  { path: 'poc', component: Work1Component },
  { path: 'daily', component: DailyComponent },
  { path: 'anodot', component: AnadotComponent },
  { path: 'transfotech', component: TransfotechComponent },
  { path: 'minereye', component: MinereyeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'netafim', component: NetafimComponent },
  { path: 'hysolate', component: HysolateComponent },
  { path: 'dailyDisplay', component: DailyDisplayComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
