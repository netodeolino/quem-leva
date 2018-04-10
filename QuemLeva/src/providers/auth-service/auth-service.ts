import { Platform } from 'ionic-angular';
import { User } from './../../models/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import * as firebase from 'firebase';

import { BaseServiceProvider } from '../base-service/base-service';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Facebook } from '@ionic-native/facebook';

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
    public http: HttpClient,
    private facebook: Facebook,
    private platform: Platform,
) {
      super()
      console.log('Hello AuthServiceProvider Provider');
  }

  loginFacebook() {
    var provider = new firebase.auth.FacebookAuthProvider();

    if (this.platform.is('cordova')) {
      this.facebook.login(['email', 'public_profile'])
      .then(res => {
      const facebookCredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
      firebase.auth().signInWithCredential(facebookCredential);
      const userObservable = this.db.object(`/users/${this.af.auth.currentUser.uid}`);
        userObservable.first().subscribe((user: User) => {
          if(user.hasOwnProperty('$value')){
            userObservable.update({
              name: this.af.auth.currentUser.displayName, 
              email: this.af.auth.currentUser.email, 
              facebookToken: res.authResponse.accessToken, 
              uidFacebook: res.authResponse.userID,
              photo: `https://graph.facebook.com/${res.authResponse.userID}/picture?type=large&access_token=${res.authResponse.accessToken}`}).then(() => {
              }).catch(this.handlePromiseError); 
          }
        })
      })
    }
    else {
      firebase.auth().signInWithPopup(provider).then((result) => {
        console.log(result);
        const userObservable = this.db.object(`/users/${result.user.uid}`);
        userObservable.first().subscribe((user: User) => {
          if(user.hasOwnProperty('$value')){
            userObservable.update({
              name: result.user.displayName, 
              email: result.user.email, 
              facebookToken: result.credential.accessToken, 
              uidFacebook: result.additionalUserInfo.profile.id,
              photo: `https://graph.facebook.com/${result.additionalUserInfo.profile.id}/picture?type=large&access_token=${result.credential.accessToken}`}).then(() => {
              }).catch(this.handlePromiseError); 
          }
        })
      }).catch(this.handlePromiseError);
    }
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
