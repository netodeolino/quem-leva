import { GrupoServiceProvider } from './../../providers/grupo-service/grupo-service';
import { Grupo } from './../../models/grupo';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-detalhes-grupo',
  templateUrl: 'detalhes-grupo.html'
})

export class DetalhesGrupoPage {
  public grupo: Grupo;
  public grupos: Grupo[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public grupoService: GrupoServiceProvider
  ) {
    this.grupo = navParams.get("grupo");
    grupoService.
  }
}

