import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-agenda-grupo',
  templateUrl: 'agenda-grupo.html'
})

export class AgendaGrupoPage {
  public grupo: Object;

  constructor(public navCtrl: NavController) {
    this.grupo = {}; // TODO: receber grupo por parametro de navegacao
  }
}

