import { Injectable } from '@angular/core';

@Injectable()
export class SettingsProvider {

  private altBackground = false;

  setBackground(isAlt: boolean) {
    this.altBackground = isAlt;
  }

  isAltBackground() {
    return this.altBackground;
  }
}
