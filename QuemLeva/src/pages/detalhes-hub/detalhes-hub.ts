import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-detalhes-hub',
  templateUrl: 'detalhes-hub.html'
})

export class DetalhesHubPage {
  public hub: Object;

  constructor(public navCtrl: NavController, private navParams: NavParams) {
    this.hub = navParams.get("hub");
  }
}

