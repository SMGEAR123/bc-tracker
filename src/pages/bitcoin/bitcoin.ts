import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { BitcoinProvider } from './../../providers/bitcoin/bitcoin';
import { Observable } from 'rxjs/Observable';
import { Bitcoin } from '../../models/bitcoin.model';


@IonicPage()
@Component({
  selector: 'page-bitcoin',
  templateUrl: 'bitcoin.html',
})
export class BitcoinPage {

  currency: string = 'USD';

  bitcoin$: Observable<Bitcoin>;

  constructor(private bitcoinProvider: BitcoinProvider ) {
  }

  ionViewWillLoad() {
    this.getBitCoinPrice();
  }

  getBitCoinPrice() {
    this.bitcoin$ = this.bitcoinProvider.getBitcoinPrice(this.currency);
    this.bitcoin$.subscribe(data => console.log(data));
  }

}
