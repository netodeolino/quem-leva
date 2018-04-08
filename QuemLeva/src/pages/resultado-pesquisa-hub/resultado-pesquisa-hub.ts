import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ResultadoPesquisaHubPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resultado-pesquisa-hub',
  templateUrl: 'resultado-pesquisa-hub.html',
})
export class ResultadoPesquisaHubPage {

  search: string;
  distancia: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
    this.search = navParams.get('pesquisa');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultadoPesquisaHubPage');
  }

}
