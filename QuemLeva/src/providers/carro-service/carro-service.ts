import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { Carro } from './../../models/carro';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseServiceProvider } from '../base-service/base-service';

/*
  Generated class for the CarroServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CarroServiceProvider extends BaseServiceProvider{

  currentCarro: FirebaseObjectObservable<Carro>;

  constructor(
    public http: HttpClient,
    public db: AngularFireDatabase,
    public af: AngularFireAuth,
  ) {
    super();
    this.listenCar();
    console.log('Hello CarroServiceProvider Provider');
  }

  listenCar(){
    this.af.authState.subscribe((authState) => {
      if(authState){
        console.log(this.af.auth.currentUser.uid);
        
        this.currentCarro = this.db.object(`/carros/${this.af.auth.currentUser.uid}`);
      }
    })
  }

  edit(carro: Carro){
    const carroObservable = this.db.object(`/carros/${this.af.auth.currentUser.uid}`);
    return carroObservable.update(carro).catch(this.handlePromiseError);
  }

  get(uid: string) {
    const carroObservable = this.db.object(`/carros/${this.af.auth.currentUser.uid}`);
    this.currentCarro = carroObservable;
  }

  delete() {
    this.db.object(`/carros/${this.af.auth.currentUser.uid}`).remove().catch(this.handlePromiseError);
  }
}
