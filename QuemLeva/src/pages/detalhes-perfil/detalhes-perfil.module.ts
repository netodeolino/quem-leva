import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalhesPerfilPage } from './detalhes-perfil';

@NgModule({
  declarations: [
    DetalhesPerfilPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalhesPerfilPage),
  ],
})
export class DetalhesPerfilPageModule {}
