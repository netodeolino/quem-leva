import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetalhesHubPage } from '../detalhes-hub/detalhes-hub';

@Component({
  selector: 'page-hubs',
  templateUrl: 'hubs.html'
})
export class HubsPage {

  private hubs: any = [
    {
      nome: 'UFC',
      icon: 'school',
      qtd: 4,
      grupos: [
        {
          nome: "Carro do Neto",
          img: "http://www.provasdevestibular.com.br/wp-content/uploads/2012/06/ufc.jpg",
          membros: [
            "Neto",
            "Lucas",
            "Lana",
          ],
          agenda: {
            idas: [
              { horario: '07:00', dias: ['seg', 'ter', 'qua', 'qui', 'sex'] },
              { horario: '18:00', dias: ['seg', 'qua', 'sex'] },
            ],
            voltas: [
              { horario: '12:00', dias: ['seg', 'ter', 'qua', 'qui', 'sex'] },
              { horario: '22:00', dias: ['seg', 'qua', 'sex'] },
            ]
          }
        },
        {
          nome: "Carro do Mackeenzy",
          img: "http://www.provasdevestibular.com.br/wp-content/uploads/2012/06/ufc.jpg",
          membros:[
            "Edson"
          ],
        }
      ]
    },
    {
      nome: 'iFactory',
      icon: 'briefcase',
      qtd: 3,
      grupos: [
        {
          nome: "Carro do Mikael",
          img: "http://www.ifactory.com.br/wp-content/uploads/2014/02/Ifactory-logo1.png",
          membros: [
            "Mikael",
            "Lana",
            "Neto",
          ],
        }
      ]
    },
    {
      nome: 'Iguatemi',
      icon: 'pricetag',
      qtd: 4,
      grupos: [
        {
          nome: "Carro do Neto",
          img: "https://yr0wqkr99mwlqxhe-zippykid.netdna-ssl.com/wp-content/uploads/2017/09/iguatemi-fortaleza-1.jpg",
          membros: [
            "Lana",
            "Lucas",
            "Neto",
            "Mikael",
          ],
        }
      ]
    }
  ];

  constructor(public navCtrl: NavController) {

  }

  onInput(event) {

  }

  onCancel(event) {
    
  }

  onSubmit(event) {
    
  }

  itemSelected(hub) {
    this.navCtrl.push(DetalhesHubPage, {hub: hub});
  }
}
