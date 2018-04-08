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

  loginFacebook() : Promise<Boolean> {
    var provider = new firebase.auth.FacebookAuthProvider();

    return new Promise((resolve, reject) => {
      this.af.auth.signInWithRedirect(provider).then((result) => {
        const userObservable = this.db.object(`/users/${result.user.uid}`);
        userObservable.valueChanges().first().subscribe((user) => {
          if(user.hasOwnProperty('$value')){
            userObservable.update({
              name: result.user.displayName, 
              email: result.user.email, 
              facebookToken: result.credential.accessToken, 
              uidFacebook: result.additionalUserInfo.profile.id, 
              photo: `https://graph.facebook.com/${result.additionalUserInfo.profile.id}/picture?type=large&access_token=${result.credential.accessToken}`}).then(() => {
                resolve(true);
              }).catch(this.handlePromiseError); 
          }  
        })
      }).catch(this.handlePromiseError)
    })
  }

  logout() {
    this.af.auth.signOut().then(() => {
      console.log("deslogado com sucesso!");
    }).catch(this.handlePromiseError);
  }

}
