import { DetalhesPerfilPage } from './../detalhes-perfil/detalhes-perfil';
import { User } from './../../models/user';
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
  public membros: User[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public grupoService: GrupoServiceProvider
  ) {
    this.grupo = navParams.get("grupo");
    this.grupoService.listenMembrosgrupo(this.grupo.$key);
    this.grupoService.membros.subscribe((users: User[]) => {
      this.membros = users;
    })
  }

  adicionarMembro() {
    this.navCtrl.push(DetalhesPerfilPage);
  }
}

