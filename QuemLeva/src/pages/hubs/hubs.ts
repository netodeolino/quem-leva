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
      grupos: [
        {
          nome: "Carro do Neto",
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
          membros:[
            "Edson"
          ]
        }
      ]
    },
    {
      nome: 'iFactory',
      icon: 'briefcase',
      grupos: [
        {
          nome: "Carro do Mikael",
          membros: [
            "Mikael",
            "Lana",
            "Neto",
          ]
        }
      ]
    },
    {
      nome: 'Iguatemi',
      icon: 'pricetag',
      grupos: [
        {
          nome: "Carro do Neto",
          membros: [
            "Lana",
            "Lucas",
            "Neto",
            "Mikael",
          ]
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
