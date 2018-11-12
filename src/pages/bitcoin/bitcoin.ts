import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { BitcoinProvider } from './../../providers/bitcoin/bitcoin';


@IonicPage()
@Component({
  selector: 'page-bitcoin',
  templateUrl: 'bitcoin.html',
})
export class BitcoinPage {

  constructor(private bitcoinProvider: BitcoinProvider ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BitcoinPage');
  }

}
