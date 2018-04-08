import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetalhesGrupoPage } from '../detalhes-grupo/detalhes-grupo';

@Component({
  selector: 'page-grupos',
  templateUrl: 'grupos.html'
})

export class GruposPage {
  public grupos: Array<any>;

  constructor(public navCtrl: NavController) {
    this.grupos = [
      {
        hub: {
          nome: "UFC",
          icon: "school"
        },
        nome: "Carro do Neto",
        membros: [
          "Neto",
          "Lucas",
          "Lana",
        ],
        idas: [
          { horario: '07:00', dias: ['seg', 'ter', 'qua', 'qui', 'sex'] },
          { horario: '18:00', dias: ['seg', 'qua', 'sex'] },
        ],
        voltas: [
          { horario: '12:00', dias: ['seg', 'ter', 'qua', 'qui', 'sex'] },
          { horario: '22:00', dias: ['seg', 'qua', 'sex'] },
        ]
      },
      {
        hub: {
          nome: "iFactory",
          icon: "briefcase"
        },
        nome: "Carro do Mikael",
        membros: [
          "Mikael",
          "Lana",
          "Neto",
        ]
      },
      {
        hub: {
          nome: "Iguatemi",
          icon: "pricetag"
        },
        nome: "Carro da Lana",
        membros: [
          "Lana",
          "Lucas",
          "Neto",
          "Mikael",
        ]
      }
    ];
  }

  public open(event, grupo) {
    console.log('grupo', grupo);
    this.navCtrl.push(DetalhesGrupoPage, {grupo: grupo});
  }
}

