import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-buscar-pessoas',
  templateUrl: 'buscar-pessoas.html'
})

export class BuscarPessoasPage {
  public grupo: Object;

  constructor(public navCtrl: NavController) {
    this.grupo = {}; // TODO: receber grupo por parametro de navegacao
  }
}

