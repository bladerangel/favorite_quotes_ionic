import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SeetingsPage } from './seetings';

@NgModule({
  declarations: [
    SeetingsPage,
  ],
  imports: [
    IonicPageModule.forChild(SeetingsPage),
  ],
})
export class SeetingsPageModule {}
