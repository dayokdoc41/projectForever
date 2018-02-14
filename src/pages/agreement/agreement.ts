import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
// import { SpeechRecognition } from '@ionic-native/speech-recognition';

import { ThankyouPage } from '../thankyou/thankyou';

@IonicPage()
@Component({
  selector: 'page-agreement',
  templateUrl: 'agreement.html',
})
export class AgreementPage {
  
  authorKnown: boolean = false;
  hideAvatar: boolean = false;

  showQuestionTwo: boolean = false;
  showQuestionThree: boolean = false;
  showProceedButton: boolean = false;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private alertCtrl: AlertController,
              private loadingCtrl: LoadingController,
              private app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgreementPage');
  }

  presentAlert(message: string,) {

  }

  didKnow(): void {
    this.authorKnown = true;
    let firstQuestion = this.alertCtrl.create({
      title: 'The Best Love Story',
      message: 'Would you mind if he asked you something?',
      buttons: [
        {
          text: 'NO',
          role: 'cancel',
          handler: () => {
            //console.log('Cancel clicked');
            this.notAllowedToAsk();
          }
        },
        {
          text: 'OK',
          handler: () => {
            // do something here
            this.hideAvatar = true;
          }
        }
      ]
    });  
    firstQuestion.present();
  }


  dontKnow(): void {
    let alert = this.alertCtrl.create({
      title: 'The Best Love Story',
      subTitle: 'His name is Edrose Singcay. He is nothing special, and for that he\'s sure. He is a common man with common thoughts, and he is living a common life. There are no monuments dedicated to him and his name will surely be forgotten. But, he loves Ma. Geralin Lequigan with all his heart and soul. And, for him, this has always been enough..',
      buttons: ['OK']
    });
    alert.present();
  }

  notAllowedToAsk(): void {
    let alert = this.alertCtrl.create({
      title: 'The Best Love Story',
      subTitle: 'Please let him ask you questions.',
      buttons: ['OK']
    })
    alert.present();
  }

  agreeQuestionOne(): void {
    this.showQuestionTwo = true;
    console.log(this.showQuestionTwo);
  }

  disagreeQuestionOne(): void {
    let alert = this.alertCtrl.create({
      title: 'The Best Love Story',
      subTitle: 'Why would you not do anything for him? Is he not wothy of you? If he is you, he would do everything he could.',
      buttons: ['OK']
    })
    alert.present();

  }
  
  agreeQuestionTwo(): void { 
    this.showQuestionThree = true;
  }

  disagreeQuestionTwo(): void { 
    let alert = this.alertCtrl.create({
      title: 'The Best Love Story',
      subTitle: 'We all have flaws and weaknesses. You should accept each others flaws for your relationship to work.',
      buttons: ['OK']
    })
    alert.present();
  }

  agreeQuestionThree(): void {
    this.showProceedButton = true;
  }
  disagreeQuestionThree(): void { 
    let alert = this.alertCtrl.create({
      title: 'The Best Love Story',
      subTitle: 'He is very ready!',
      buttons: ['OK']
    })
    alert.present();
  }

  proceed(): void {
    console.log("finaly stage");
    this.showLoading("");
    setTimeout( () => {
      this.app.getRootNav().setRoot(ThankyouPage);
    }, 300);
  }

  showLoading(message: string) {
    let loading = this.loadingCtrl.create({
      content: message,
      dismissOnPageChange: true
    });
    loading.present();
  }

}
