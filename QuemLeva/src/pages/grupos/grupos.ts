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
        img: "http://www.provasdevestibular.com.br/wp-content/uploads/2012/06/ufc.jpg",
        membros: [
          { nome: "Neto", img: "" },
          { nome: "Lucas", img: "" },
          { nome: "Lana", img: "" },
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
        img: "http://www.ifactory.com.br/wp-content/uploads/2014/02/Ifactory-logo1.png",
        membros: [
          { nome: "Mikael", img: "" },
          { nome: "Lana", img: "" },
          { nome: "Neto", img: "" },
        ]
      },
      {
        hub: {
          nome: "Iguatemi",
          icon: "pricetag"
        },
        nome: "Carro da Lana",
        img: "https://yr0wqkr99mwlqxhe-zippykid.netdna-ssl.com/wp-content/uploads/2017/09/iguatemi-fortaleza-1.jpg",
        membros: [
          { nome: "Lana", img: "" },
          { nome: "Lucas", img: "" },
          { nome: "Neto", img: "" },
          { nome: "Mikael", img: "" },
        ]
      }
    ];
  }

  public open(event, grupo) {
    this.navCtrl.push(DetalhesGrupoPage, {grupo: grupo});
  }
}

