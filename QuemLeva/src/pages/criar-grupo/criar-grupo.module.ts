import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CriarGrupoPage } from './criar-grupo';

@NgModule({
  declarations: [
    CriarGrupoPage,
  ],
  imports: [
    IonicPageModule.forChild(CriarGrupoPage),
  ],
})
export class CriarGrupoPageModule {}
