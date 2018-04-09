import { CadastroUsuarioPage } from './../pages/cadastro-usuario/cadastro-usuario';
import { ResultadoPesquisaHubPage } from './../pages/resultado-pesquisa-hub/resultado-pesquisa-hub';
import { ChatPage } from './../pages/chat/chat';
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
import { DetalhesHubPage } from '../pages/detalhes-hub/detalhes-hub';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';

import { BrMaskerModule } from 'brmasker-ionic-3';
import { CalendarModule } from 'ionic3-calendar-en';
import { File } from '@ionic-native/file';
import { Camera } from '@ionic-native/camera';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';

// Firebase imports
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { HttpModule } from '@angular/http';
import { UserServiceProvider } from '../providers/user-service/user-service';
import { GrupoServiceProvider } from '../providers/grupo-service/grupo-service';
import { CarroServiceProvider } from '../providers/carro-service/carro-service';
import { HubServiceProvider } from '../providers/hub-service/hub-service';

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
    ChatPage,
    PerfilPage,
    HubsPage,
    TabsPage,
    LoginPage,
    DetalhesGrupoPage,
    BuscarPessoasPage,
    AgendaGrupoPage,
    DetalhesHubPage,
    ResultadoPesquisaHubPage,
    CadastroUsuarioPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpModule,
    HttpClientModule,
    BrMaskerModule,
    CalendarModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    GruposPage,
    ChatPage,
    PerfilPage,
    HubsPage,
    TabsPage,
    LoginPage,
    DetalhesGrupoPage,
    BuscarPessoasPage,
    AgendaGrupoPage,
    DetalhesHubPage,
    ResultadoPesquisaHubPage,
    CadastroUsuarioPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    HttpClient,
    UserServiceProvider,
    GrupoServiceProvider,
    CarroServiceProvider,
    HubServiceProvider,
    FileTransfer,
    File,
    FileTransferObject,
    Camera
  ]
})
export class AppModule {}
