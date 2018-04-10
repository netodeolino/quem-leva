import { CadastroUsuarioPage } from './../cadastro-usuario/cadastro-usuario';
import { TabsPage } from './../tabs/tabs';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loading: Loading;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loadingCtrl : LoadingController,
    public authService: AuthServiceProvider ) {
      this.authService.af.authState.subscribe(user => {
        if (!user) {       
          return;
        }
        this.navCtrl.setRoot(TabsPage);
        this.navCtrl.push(TabsPage);        
      });
    }
    
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  
  loginFacebook(){
    this.authService.loginFacebook();
  }

  logout(){
    this.authService.logout();
  }

  registrar() {
    this.navCtrl.push(CadastroUsuarioPage);
  }

}
