import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { SpeechRecognition } from '@ionic-native/speech-recognition';


@IonicPage()
@Component({
  selector: 'page-thankyou',
  templateUrl: 'thankyou.html',
})
export class ThankyouPage {
  
  hintCount: number = 2;
  firstHintWord: string = '_';
  secondHintWord: string = '_ _ _';
  missingWord: string = '_ _ _ _';
  disableHintButton: boolean = false;
  showConfirmed: boolean = false;
  showThankYou: boolean = false;
  showConfirmation: boolean = true;
  options: any = {language: "en-US"};
  showStopButton: boolean = false;
  capturedWords: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private speechRecognition: SpeechRecognition,
              private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThankyouPage');
  }

  provideHint(): void {
    this.hintCount--;
    if(this.hintCount === 1) {
      this.secondHintWord = 'YOU';
    }
    if(this.hintCount === 0) {
      this.firstHintWord = 'I';
      this.disableHintButton = true;
    }
  }

  sayMissingWords(): void {
    // console.log('Speak now');
    // this.speechRecognition.isRecognitionAvailable()
    // .then((available: boolean) => console.log(available))
    // this.showConfirmed = true;
    // this.showConfirmation = false;
    this.speechRecognition.isRecognitionAvailable()
    .then((available: boolean) => {
      if (available) {
        this.speechRecognition.hasPermission()
        .then((hasPermission: boolean) => {
          if(hasPermission) {
            this.startListening();
          } else {
            this.speechRecognition.requestPermission().then(
              () => {
                this.startListening()
              },
              () => {
                this.showErrorAlert("Speech Recognition Permission is Denied!");
                this.stopSpeaking();
              });
          }
        });
      }
    })
    
    this.showStopButton = true;

  }

  stopSpeaking(): void {
    this.speechRecognition.stopListening();
    //process word;
    this.showStopButton = false;
    console.log('Processing words');
    

  }

  startListening(): void {
    this.speechRecognition.startListening(this.options)
      .subscribe(
        (matches: Array<string>) => {
          console.log(matches);
          console.log("say something");
          let matchword1 = /i love you/gi;
          let matchword2 = /love/gi;

          for(let words in matches){
            if (words.toString().toLowerCase() === 'i love you' ) {
              console.log("alright");
            } 
            else if (words.toString().toLowerCase() === 'love'){
              console.log("alright but not yet");
            }
            else {
              console.log("ohnoes");
            }
          }
          this.capturedWords = matches;
        },
        (onerror) => {

        }
    )
  }

  showErrorAlert(message: string): void{
    let alert = this.alertCtrl.create({
      title: "ERROR!",
      subTitle: message,
      buttons: ["DISMISS"]      
    })
    alert.present();
  }

  public endTheStory(): void {
    this.showConfirmed = false;
    this.showThankYou = true;
  }

}
