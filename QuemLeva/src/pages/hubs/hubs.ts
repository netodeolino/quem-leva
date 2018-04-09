import { LoginPage } from './../login/login';
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
    public authService: AuthServiceProvider) {

      hubService.hubs.subscribe((hubs: Hub[]) => {
        if(hubs){
          this.hubs = hubs;
        }
      })

  }

  onInput(event) {

  }

  onCancel(event) {
  }

  onSubmit(event) {
    
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
