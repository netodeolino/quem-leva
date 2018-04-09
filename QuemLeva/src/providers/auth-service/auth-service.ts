import { User } from './../../models/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import * as firebase from 'firebase';

import { BaseServiceProvider } from '../base-service/base-service';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

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

  loginFacebook(): Promise<boolean> {
    var provider = new firebase.auth.FacebookAuthProvider();
    return new Promise((resolve, reject) => {
      firebase.auth().signInWithPopup(provider).then((result) => {
        const userObservable = this.db.object(`/users/${result.user.uid}`);
        userObservable.first().subscribe((user: User) => {
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
      }).catch(this.handlePromiseError);
    })
  }

  createAuthUser(user: {email : string, password : string}) : firebase.Promise<AngularFireAuth>{
    return this.af.auth.createUserWithEmailAndPassword(user.email, user.password).catch(this.handlePromiseError);
  }

  siginWithEmail(user: {email: string, password: string}) : firebase.Promise<boolean> {
    return this.af.auth.signInWithEmailAndPassword(user.email, user.password).then((authState : AngularFireAuth) => {
      return authState != null;
    }).catch(this.handlePromiseError);
  } 

  logout(): Promise<boolean>{
    return new Promise((resolve, reject) => {
      this.af.auth.signOut().then(() => {
        resolve(true);
    }).catch(this.handlePromiseError)
    })
  }

  get authenticated(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.af.authState.first().subscribe((authState) => {
        if(authState){
          resolve(true);
        } else {
          reject(false);
        }
      });
    });
  }

}
