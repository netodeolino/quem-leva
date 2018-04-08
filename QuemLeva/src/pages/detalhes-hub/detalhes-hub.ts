import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-detalhes-hub',
  templateUrl: 'detalhes-hub.html'
})

export class DetalhesHubPage {
  public grupo: Object;

  constructor(public navCtrl: NavController) {
    this.grupo = {}; // TODO: receber grupo por parametro de navegacao
  }
}

