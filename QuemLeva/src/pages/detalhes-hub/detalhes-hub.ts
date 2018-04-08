import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetalhesGrupoPage } from '../detalhes-grupo/detalhes-grupo';

@Component({
  selector: 'page-detalhes-hub',
  templateUrl: 'detalhes-hub.html'
})

export class DetalhesHubPage {
  public hub: Object;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.hub = navParams.get('hub');
  }

  itemSelected(grupo) {
    this.navCtrl.push(DetalhesGrupoPage, {grupo: grupo});
  }
}

