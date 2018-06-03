import { Component } from '@angular/core';
import { IonicPage, ModalController } from 'ionic-angular';

import { Quote } from '../../data/quote.interface';
import { QuotesProvider } from '../../providers/quotes/quotes';


@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {

  quotes: Quote[];

  constructor(private quotesProvider: QuotesProvider, private modalCtrl: ModalController) { }

  ionViewWillEnter() {
    this.quotes = this.quotesProvider.getFavoriteQuotes();
  }

  onViewQuote(quote: Quote) {
    const modal = this.modalCtrl.create('QuotePage', quote);
    modal.onDidDismiss((remove: boolean) => {
      if (remove) {
        this.quotesProvider.removeQuoteFromFavorite(quote);
        this.quotes = this.quotesProvider.getFavoriteQuotes();
      }
    });
    modal.present();
   
  }
}
