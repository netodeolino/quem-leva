import { LoginPage } from './../login/login';
import { DetalhesPerfilPage } from './../detalhes-perfil/detalhes-perfil';
import { ResultadoPesquisaHubPage } from './../resultado-pesquisa-hub/resultado-pesquisa-hub';
import { HubServiceProvider } from './../../providers/hub-service/hub-service';
import { Hub } from './../../models/hub';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetalhesHubPage } from '../detalhes-hub/detalhes-hub';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@Component({
  selector: 'page-hubs',
  templateUrl: 'hubs.html'
})
export class HubsPage {

  public myInput;

  public hubs: Hub[];

  constructor(
    public navCtrl: NavController,
    public hubService: HubServiceProvider,
    public authService: AuthServiceProvider,
  ) {
      this.initializeItems();
  }

  initializeItems() {
    this.hubService.hubs.subscribe((hubs: Hub[]) => {
      if(hubs){
        this.hubs = hubs;
      }
    })
  }

  onInput(event: any) {
    this.initializeItems();

    let val = event.target.value;

    if (val && val.trim() != '') {
      this.hubs = this.hubs.filter((item) => {
        return (item.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  onCancel(event) {
  }

  onSubmit(event) {
    this.navCtrl.push(ResultadoPesquisaHubPage, {pesquisa: this.myInput});
  }

  itemSelected(hubKey) {
    this.navCtrl.push(DetalhesHubPage, {hubKey: hubKey});
  }

  hub() {
    this.authService.logout().then((logoutSucess) => {
      this.navCtrl.setRoot(LoginPage);
    })
  }
}
