import { Grupo } from './../../models/grupo';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GrupoServiceProvider } from '../../providers/grupo-service/grupo-service';
import { DetalhesGrupoPage } from '../detalhes-grupo/detalhes-grupo';

@Component({
  selector: 'page-detalhes-hub',
  templateUrl: 'detalhes-hub.html'
})

export class DetalhesHubPage {
  public hubKey: number;
  public grupos: Grupo[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public grupoService: GrupoServiceProvider) {
    this.hubKey = navParams.get('hubKey');
    this.grupoService.listenGroupsHub(this.hubKey);
    console.log(this.hubKey);
    
    this.grupoService.gruposHub.subscribe((grupos: Grupo[]) => {
      this.grupos = grupos;
    })
  }

  itemSelected(grupo) {
    this.navCtrl.push(DetalhesGrupoPage, {grupo: grupo});
  }
}

