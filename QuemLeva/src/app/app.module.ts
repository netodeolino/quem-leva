import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { GruposPage } from '../pages/grupos/grupos';
import { PerfilPage } from '../pages/perfil/perfil';
import { HubsPage } from '../pages/hubs/hubs';
import { LoginPage } from './../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import { DetalhesGrupoPage } from '../pages/detalhes-grupo/detalhes-grupo';
import { BuscarPessoasPage } from '../pages/buscar-pessoas/buscar-pessoas';
import { AgendaGrupoPage } from '../pages/agenda-grupo/agenda-grupo';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';

// Firebase imports
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { HttpModule } from '@angular/http';

export const firebaseConfig = {
  apiKey: "AIzaSyBt8A8cRgpqKwjVYxnihM1IMFPHSTmkH_E",
  authDomain: "quem-leva.firebaseapp.com",
  databaseURL: "https://quem-leva.firebaseio.com",
  storageBucket: "quem-leva.appspot.com",
  messagingSenderId: "379254848591"
};

@NgModule({
  declarations: [
    MyApp,
    GruposPage,
    PerfilPage,
    HubsPage,
    TabsPage,
    LoginPage,
    DetalhesGrupoPage,
    BuscarPessoasPage,
    AgendaGrupoPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpModule,
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    GruposPage,
    PerfilPage,
    HubsPage,
    TabsPage,
    LoginPage,
    DetalhesGrupoPage,
    BuscarPessoasPage,
    AgendaGrupoPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    HttpClient
  ]
})
export class AppModule {}
