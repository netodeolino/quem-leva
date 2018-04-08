import { GrupoServiceProvider } from './../../providers/grupo-service/grupo-service';
import { Grupo } from './../../models/grupo';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetalhesGrupoPage } from '../detalhes-grupo/detalhes-grupo';

@Component({
  selector: 'page-grupos',
  templateUrl: 'grupos.html'
})

export class GruposPage {
  public grupos: Grupo[];

  constructor(public navCtrl: NavController, public grupoService: GrupoServiceProvider) {
    this.grupoService.grupos.subscribe((grupos : any[]) => {
      this.grupos = grupos;
    });

    console.log(this.grupos);
  }
  
  public open(event, grupo:Grupo) {
    this.navCtrl.push(DetalhesGrupoPage, {grupo: grupo});
  }
}

