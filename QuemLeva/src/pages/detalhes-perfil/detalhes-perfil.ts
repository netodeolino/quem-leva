import { CarroServiceProvider } from './../../providers/carro-service/carro-service';
import { AuthServiceProvider } from './../../providers/auth-service/auth-service';
import { UserServiceProvider } from './../../providers/user-service/user-service';
import { Carro } from './../../models/carro';
import { User } from './../../models/user';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-detalhes-perfil',
  templateUrl: 'detalhes-perfil.html',
})
export class DetalhesPerfilPage {

  currentUser: User;
  currentCar: Carro;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams, 
    public userService: UserServiceProvider,
    public authService: AuthServiceProvider,
    public carroService: CarroServiceProvider) {
      authService.af.authState.subscribe((authState) => {
        if (authState) {
          userService.currentUser.subscribe((user : User) => {
            if (user) {
              this.currentUser = user;
              carroService.currentCarro.subscribe((carro: Carro) => {
                if (carro) {
                  this.currentCar = carro;
                }
              })
            }
          })
        }
      });
  }

  ionViewDidLoad() {
  }

  pular(user) {

  }

  convidar(user) {

  }
}
