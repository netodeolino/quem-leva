import { GrupoServiceProvider } from './../../providers/grupo-service/grupo-service';
import { CarroServiceProvider } from './../../providers/carro-service/carro-service';
import { AuthServiceProvider } from './../../providers/auth-service/auth-service';
import { UserServiceProvider } from './../../providers/user-service/user-service';
import { Carro } from './../../models/carro';
import { User } from './../../models/user';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-detalhes-perfil',
  templateUrl: 'detalhes-perfil.html',
})
export class DetalhesPerfilPage {

  currentUser: User;
  currentCar: Carro;
  private index: number = 0;
  public membros: User[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams, 
    public userService: UserServiceProvider,
    public authService: AuthServiceProvider,
    public carroService: CarroServiceProvider,
    public grupoService: GrupoServiceProvider,
    private toastCtrl: ToastController) {
      // authService.af.authState.subscribe((authState) => {
      //   if (authState) {
      //     userService.currentUser.subscribe((user : User) => {
      //       if (user) {
      //         this.currentUser = user;
      //         carroService.currentCarro.subscribe((carro: Carro) => {
      //           if (carro) {
      //             this.currentCar = carro;
      //           }
      //         })
      //       }
      //     })
      //   }
      // });
      this.grupoService.membros.subscribe((users: User[]) => {
        this.membros = users;
        this.currentUser = this.membros[0];
      })
  }

  ionViewDidLoad() {
  }

  pular(user) {
    this.index = this.index + 1;
    if (this.index < this.membros.length) {
      this.currentUser = this.membros[this.index];
    } else {
      this.presentToast();
    }
  }

  convidar(user) {
    this.membros.splice(this.index, 1);
    this.index = 0;
    this.currentUser = this.membros[this.index];
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Fim das sugestões :)',
      duration: 3000,
      position: 'bottom'
    });
  
    toast.onDidDismiss(() => {
      //console.log('Dismissed toast');
    });
  
    toast.present();
  }
}
