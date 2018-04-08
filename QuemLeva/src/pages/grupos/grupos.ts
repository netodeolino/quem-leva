import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetalhesGrupoPage } from '../detalhes-grupo/detalhes-grupo';

@Component({
  selector: 'page-grupos',
  templateUrl: 'grupos.html'
})

export class GruposPage {
  public grupos: Array<any>;

  constructor(public navCtrl: NavController) {
    this.grupos = [
      {nome: "UFC - Carro do Neto"},
      {nome: "iFactory - Carro do Mikael"},
      {nome: "Surf - Carro da Lana"}
    ];
  }

  public open(event, grupo) {
    console.log('grupo', grupo);
    this.navCtrl.push(DetalhesGrupoPage, {grupo: grupo});
  }
}

