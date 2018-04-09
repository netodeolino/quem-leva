import { LoginPage } from './../login/login';
import { Carro } from './../../models/carro';
import { CarroServiceProvider } from './../../providers/carro-service/carro-service';
import { AuthServiceProvider } from './../../providers/auth-service/auth-service';
import { UserServiceProvider } from './../../providers/user-service/user-service';
import { User } from './../../models/user';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html'
})
export class PerfilPage {

  currentUser: User;
  currentCar: Carro;

  constructor(
    public navCtrl: NavController,
    public userService: UserServiceProvider,
    public authService: AuthServiceProvider,
    public carroService: CarroServiceProvider,
  ) {
    authService.af.authState.subscribe((authState) => {
      if(authState) {
        userService.currentUser.subscribe((user : User) => {
          if(user){
            this.currentUser = user;
            carroService.currentCarro.subscribe((carro: Carro) => {
              if(carro){
                this.currentCar = carro;
              }
            })
          }
        })
      }
    });
  }

  atualizarPerfil() {
    this.userService.edit(this.currentUser);
    this.carroService.edit(this.currentCar);
  }

  logout() {
    this.authService.logout().then(() => {
      this.navCtrl.push(LoginPage);
    });
  }

}
