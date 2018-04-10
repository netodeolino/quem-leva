import { GrupoServiceProvider } from './../../providers/grupo-service/grupo-service';
import { Grupo } from './../../models/grupo';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CriarGrupoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-criar-grupo',
  templateUrl: 'criar-grupo.html',
})
export class CriarGrupoPage {

  grupo: Grupo = new Grupo("", "");
  hubKey: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public grupoService: GrupoServiceProvider,
  ) {
    this.hubKey = navParams.get("hubKey");
  }

  criarGrupo(){
    this.grupoService.createGroup(this.hubKey, this.grupo);
    this.navCtrl.pop();
  }

}
