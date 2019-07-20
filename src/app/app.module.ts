import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {OnboardComponent} from './onboard/onboard.component';
import {RouterModule, Routes} from '@angular/router';
import { LiveComponent } from './live/live.component';
import { BalanceComponent } from './balance/balance.component';
import { MessagesComponent } from './messages/messages.component';
import { CallsComponent } from './calls/calls.component';
import { VideoComponent } from './video/video.component';
import { MusicComponent } from './music/music.component';
import { DataComponent } from './data/data.component';
import { SettingsComponent } from './settings/settings.component';
import { CameraComponent } from './camera/camera.component';

const appRoutes: Routes = [
  { path: 'welcome',
    component: OnboardComponent
  },
  {
    path: '',
    redirectTo: '/welcome', pathMatch: 'full'
  }
];


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    OnboardComponent,
    LiveComponent,
    BalanceComponent,
    MessagesComponent,
    CallsComponent,
    VideoComponent,
    MusicComponent,
    DataComponent,
    SettingsComponent,
    CameraComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
