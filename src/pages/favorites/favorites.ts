import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { Quote } from '../../data/quote.interface';
import { QuotesProvider } from '../../providers/quotes/quotes';


@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {

  quotes: Quote[];

  constructor(private quotesProvider: QuotesProvider) { }

  ionViewWillEnter() {
    this.quotes = this.quotesProvider.getFavoriteQuotes();
  }
}
