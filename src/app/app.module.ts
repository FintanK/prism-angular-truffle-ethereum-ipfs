import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {OnboardComponent} from './onboard/onboard.component';
import {RouterModule, Routes} from '@angular/router';
import {LiveComponent} from './live/live.component';
import {BalanceComponent} from './balance/balance.component';
import {MessagesComponent} from './messages/messages.component';
import {CallsComponent} from './calls/calls.component';
import {VideoComponent} from './video/video.component';
import {MusicComponent} from './music/music.component';
import {DataComponent} from './data/data.component';
import {SettingsComponent} from './settings/settings.component';
import {CameraComponent} from './camera/camera.component';
import {FilesComponent} from './files/files.component';
import {ChatComponent} from './chat/chat.component';
import {MoviesComponent} from './movies/movies.component';
import {ContactsComponent} from './contacts/contacts.component';
import {PhotosComponent} from './photos/photos.component';

const appRoutes: Routes = [
  { path: 'welcome',
    component: OnboardComponent
  },
  { path: 'balance',
    component: BalanceComponent
  },
  { path: 'calls',
    component: CallsComponent
  },
  { path: 'camera',
    component: CameraComponent
  },
  { path: 'chat',
    component: OnboardComponent
  },
  { path: 'contacts',
    component: ContactsComponent
  },
  { path: 'data',
    component: DataComponent
  },
  { path: 'files',
    component: FilesComponent
  },
  { path: 'messages',
    component: MessagesComponent
  },
  { path: 'music',
    component: MusicComponent
  },
  { path: 'settings',
    component: SettingsComponent
  },
  { path: 'movies',
    component: MoviesComponent
  },
  { path: 'video',
    component: VideoComponent
  },
  { path: 'photos',
    component: PhotosComponent
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
    CameraComponent,
    FilesComponent,
    ChatComponent,
    MoviesComponent,
    ContactsComponent,
    PhotosComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
