import { Component } from '@angular/core';
import { IonicPage, Toggle } from 'ionic-angular';
import { SettingsProvider } from '../../providers/settings/settings';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(private settingsProvider: SettingsProvider) { }

  onToggle(toggle: Toggle) {
    this.settingsProvider.setBackground(toggle.checked);
  }

  checkAltBackground() {
    return this.settingsProvider.isAltBackground();
  }

}
