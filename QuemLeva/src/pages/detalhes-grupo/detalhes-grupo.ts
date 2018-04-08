import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-detalhes-grupo',
  templateUrl: 'detalhes-grupo.html'
})

export class DetalhesGrupoPage {
  public grupo: Object;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.grupo = navParams.get("grupo");
  }
}

