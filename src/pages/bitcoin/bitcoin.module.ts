import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BitcoinPage } from './bitcoin';
import { BitcoinProvider } from '../../providers/bitcoin/bitcoin';
import { HttpClientModule} from '@angular/common/http';
/*Had to import this because HttpClient was changed https://stackoverflow.com/questions/46000748/error-no-provider-for-httphandler-in-angular2*/


@NgModule({
  declarations: [
    BitcoinPage,
  ],
  imports: [
    IonicPageModule.forChild(BitcoinPage),
    HttpClientModule
  ],
  providers: [
    BitcoinProvider
  ]
})
export class BitcoinPageModule {}
