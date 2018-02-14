import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { AgreementPage } from '../agreement/agreement';

@IonicPage()
@Component({
  selector: 'page-story',
  templateUrl: 'story.html',
})
export class StoryPage {

  isNo: boolean = false;
  isYes: boolean = false;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private app: App,
              private loadingCtrl: LoadingController,
              private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StoryPage');
  }

  showLoading(message: string) {
    let loading = this.loadingCtrl.create({
      content: message,
      dismissOnPageChange: true
    });
    loading.present();
  }

  accepted(): void {
    this.isYes = true;
    this.showLoading("");
    setTimeout( () => {
      this.app.getRootNav().setRoot(AgreementPage);
    }, 300);


  }

  disaccept(): void {
    this.isNo = true;
    let alert = this.alertCtrl.create({
      title: 'The Best Love Story',
      subTitle: 'You cannot miss the best love story ever.',
      buttons: ['OK']
    });
    alert.present();
  }

}
