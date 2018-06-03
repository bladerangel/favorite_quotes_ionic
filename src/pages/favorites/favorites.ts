import { Component } from '@angular/core';
import { IonicPage, ModalController } from 'ionic-angular';

import { Quote } from '../../data/quote.interface';
import { QuotesProvider } from '../../providers/quotes/quotes';
import { SettingsProvider } from '../../providers/settings/settings';


@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {

  quotes: Quote[];

  constructor(private quotesProvider: QuotesProvider, private modalCtrl: ModalController, private settingsProvider: SettingsProvider) { }

  ionViewWillEnter() {
    this.quotes = this.quotesProvider.getFavoriteQuotes();
  }

  onViewQuote(quote: Quote) {
    const modal = this.modalCtrl.create('QuotePage', quote);
    modal.onDidDismiss((remove: boolean) => {
      if (remove) {
        this.onRemoveFromFavorites(quote);
      }
    });
    modal.present();
  }

  onRemoveFromFavorites(quote: Quote) {
    this.quotesProvider.removeQuoteFromFavorite(quote);
    this.quotes = this.quotesProvider.getFavoriteQuotes();
  }

  getBackground() {
    return this.settingsProvider.isAltBackground() ? 'altQuoteBackground' : 'quoteBackground';
  }

}
