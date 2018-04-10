import { User } from './../../models/user';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Grupo } from '../../models/grupo';
import { BaseServiceProvider } from '../base-service/base-service';

/*
  Generated class for the GrupoServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GrupoServiceProvider extends BaseServiceProvider {

  currentGrupo: FirebaseObjectObservable<Grupo>;
  gruposHub: FirebaseListObservable<Grupo[]>;
  grupos: FirebaseListObservable<Grupo[]>;
  membros: FirebaseListObservable<User[]>;

  constructor(
    public http: HttpClient,
    public af: AngularFireAuth,
    public db: AngularFireDatabase,
  ) {
    super();
    this.listenMyGroups();
  }

  private listenMyGroups(){
    const grupoObservable = this.db.list(`/grupos-usuarios`);
    this.grupos = grupoObservable;
  }

  public createGroup(hubKey: any, grupo: Grupo){
    this.db.list(`/grupos/${hubKey}`).push(grupo);
    this.db.list(`/grupos-usuarios`).push(grupo);
  }

  public listenGroupsHub(hubKey: number){
    const grupoObservable = this.db.list(`/grupos/${hubKey}`);
    this.gruposHub = grupoObservable;
  }

  public listenMembrosgrupo(grupoKey){
    const membrosObservable = this.db.list(`/grupos-usuarios/${grupoKey}/membros`);
    console.log(grupoKey);
    
    this.membros = membrosObservable;
  }
}
