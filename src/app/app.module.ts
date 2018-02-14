import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {  SpeechRecognition } from '@ionic-native/speech-recognition';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { StoryPage } from '../pages/story/story';
import { AgreementPage } from '../pages/agreement/agreement';
import { ThankyouPage } from '../pages/thankyou/thankyou';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    StoryPage,
    AgreementPage,
    ThankyouPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    StoryPage,
    AgreementPage,
    ThankyouPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SpeechRecognition,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
