import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

import { StoryPage } from '../story/story';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  isReady: boolean = false;

  constructor( public navCtrl: NavController, 
               private loadingCtrl: LoadingController,
               private app: App) {

  }
  private showLoading() {
    let loader = this.loadingCtrl.create({
      content: 'You will witness the greatest love story of all time.',
      dismissOnPageChange: true
    });
    loader.present();
  }

  public acceptBegin(): void {
    this.isReady = true;
    this.showLoading();
    setTimeout( () => {
      // this.app.getRootNav().setRoot(StoryPage);
      this.app.getRootNav().setRoot(StoryPage);
    }, 3000);
    console.log('Hallo!');
  }

}
