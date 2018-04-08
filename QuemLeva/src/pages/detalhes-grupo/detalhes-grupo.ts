import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-detalhes-grupo',
  templateUrl: 'detalhes-grupo.html'
})

export class DetalhesGrupoPage {
  public grupo: Object;

  constructor(public navCtrl: NavController) {
    this.grupo = {}; // TODO: receber grupo por parametro de navegacao
  }
}

