import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BitcoinPage } from './bitcoin';
import { BitcoinProvider } from '../../providers/bitcoin/bitcoin';

@NgModule({
  declarations: [
    BitcoinPage,
  ],
  imports: [
    IonicPageModule.forChild(BitcoinPage),
  ],
  providers: [
    BitcoinProvider
  ]
})
export class BitcoinPageModule {}
