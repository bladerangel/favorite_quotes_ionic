import { Injectable } from '@angular/core';
import { Quote } from '../../data/quote.interface';

@Injectable()
export class QuotesProvider {

  private favoriteQuotes: Quote[] = [];

  addQuoteToFavorite(quote: Quote) {
    this.favoriteQuotes.push(quote);
  }

  removeQuoteFromFavorite(quote: Quote) {
    const position = this.favoriteQuotes.findIndex((quoteEl: Quote) => {
      return quoteEl.id == quote.id;
    });
    this.favoriteQuotes.splice(position, 1);
  }

  getFavoriteQuotes() {
    return this.favoriteQuotes.slice();
  }

  isQuoteFavorite(quote: Quote) {
    return this.favoriteQuotes.find((quoteEl: Quote) => {
      return quoteEl.id == quote.id;
    });
  }
}
