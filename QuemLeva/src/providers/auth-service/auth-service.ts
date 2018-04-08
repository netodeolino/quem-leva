import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import * as firebase from 'firebase/app';

import { BaseServiceProvider } from '../base-service/base-service';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider extends BaseServiceProvider {

  constructor(
    public af: AngularFireAuth,
    public db: AngularFireDatabase,
    public http: HttpClient) {
      super()
      console.log('Hello AuthServiceProvider Provider');
  }

  loginFacebook(){
    var provider = new firebase.auth.FacebookAuthProvider();

    this.af.auth.signInWithRedirect(provider).then((res) => {
      console.log(res);
    }).catch(this.handlePromiseError)

  }

  logout() {
    this.af.auth.signOut().then(() => {
      console.log("deslogado com sucesso!");
    }).catch(this.handlePromiseError);
  }

}
