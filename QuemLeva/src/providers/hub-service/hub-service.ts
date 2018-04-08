import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { Hub } from './../../models/hub';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseServiceProvider } from '../base-service/base-service';

/*
  Generated class for the HubServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HubServiceProvider extends BaseServiceProvider {

  hubs: FirebaseListObservable<Hub[]>;

  constructor(
    public http: HttpClient,
    public af: AngularFireAuth,
    public db: AngularFireDatabase,
  ) {
    super();
    this.listenHubs();
  }

  listenHubs(){
    const hubObservable = this.db.list(`/hub`);
    this.hubs = hubObservable;
  }
}
