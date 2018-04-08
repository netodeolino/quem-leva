import { ChatPage } from './../chat/chat';
import { Component } from '@angular/core';

import { PerfilPage } from '../perfil/perfil';
import { HubsPage } from '../hubs/hubs';
import { GruposPage } from '../grupos/grupos';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HubsPage;
  tab2Root = GruposPage;
  tab3Root = PerfilPage;
  tab4Root = ChatPage;

  constructor() {

  }
}
