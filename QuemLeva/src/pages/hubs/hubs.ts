import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-hubs',
  templateUrl: 'hubs.html'
})
export class HubsPage {

  private itens: any = [
    { nome: 'UFC', icon: 'school' },
    { nome: 'iFactory', icon: 'briefcase' },
    { nome: 'Iguatemy', icon: 'pricetag' }
  ];

  constructor(public navCtrl: NavController) {

  }

  onInput(event) {

  }

  onCancel(event) {
    
  }

  itemSelected(item) {
    console.log(item);
  }
}
