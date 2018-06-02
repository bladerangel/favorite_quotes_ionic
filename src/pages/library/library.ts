import { Component, OnInit } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { Quote } from '@angular/compiler';
import quotes from '../../data/quotes';

@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit {

  quotesCollection: { category: string, quotes: Quote[], icon: string }[];

  ngOnInit(): void {
    this.quotesCollection = quotes;
  }

}
