import { Component, OnInit } from '@angular/core';
import { IonicPage, NavParams, AlertController } from 'ionic-angular';

import { Quote } from '../../data/quote.interface';
import { QuotesProvider } from '../../providers/quotes/quotes';

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {

  quoteGroup: { category: string, quotes: Quote[], icon: string };

  constructor(private navParams: NavParams, private alertCtrl: AlertController, private quotesProvider: QuotesProvider) { }

  ngOnInit() {
    this.quoteGroup = this.navParams.data;
  }

  onAddToFavorites(selectedQuote: Quote) {
    const alert = this.alertCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are you sure?',
      message: 'Are you sure you want to add the quote?',
      buttons: [
        {
          text: 'Yes, go ahead',
          handler: () => {
            this.quotesProvider.addQuoteToFavorite(selectedQuote);
          }
        },
        {
          text: 'No, I change my mind!',
          role: 'cancel',
          handler: () => {
            console.log('Cancel');
          }
        }
      ]
    });
    alert.present();
  }


  onRemoveFromFavorites(quote: Quote) {
    this.quotesProvider.removeQuoteFromFavorite(quote);
  }

  isFavorite(quote: Quote) {
    return this.quotesProvider.isQuoteFavorite(quote);
  }

}
