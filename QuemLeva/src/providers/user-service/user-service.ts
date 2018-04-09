import { AngularFireAuth } from 'angularfire2/auth';
import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { FirebaseObjectObservable, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { User } from '../../models/user';
import { BaseServiceProvider } from '../base-service/base-service';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import { FirebaseApp } from 'angularfire2';

/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserServiceProvider extends BaseServiceProvider{

  users: FirebaseListObservable<User[]>;
  currentUser : FirebaseObjectObservable<User>;

  constructor(
    public http: HttpClient,
    public af: AngularFireAuth,
    public db: AngularFireDatabase,
    @Inject(FirebaseApp) public firebaseApp : FirebaseApp,) {
      super();
      this.listenAuthState();
  }

  private setUsers(userToExc : string) : void {
    this.users = <FirebaseListObservable<User[]>>this.db.list('/users', {
      query: {
        orderByChild: 'name'
      }
    }).map((users : User[]) => {
      return users.filter((user : User) => user.$key !== userToExc)
    });

  }

  private listenAuthState() : void {
    this.af.authState
      .subscribe((authState) => {
        if(authState){
          this.currentUser = this.db.object('/users/'+authState.uid);
          this.setUsers(authState.uid);
        }
      })
  }

  edit(user: User) : firebase.Promise<void> {
    return this.currentUser.update(user).catch(this.handlePromiseError);
  }

  create(user: User, uuid : string) : firebase.Promise<void>{
    return this.db.object('/users/'+uuid).set(user).catch(this.handlePromiseError);
  }

  uploadPhoto(file : any, userId : string) : firebase.storage.UploadTask {
    const storageRef = firebase.storage().ref();
    return storageRef.child('/users/'+userId).put(file);
  }

}
