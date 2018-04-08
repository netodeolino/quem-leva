import { Grupo } from './../../models/grupo';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetalhesGrupoPage } from '../detalhes-grupo/detalhes-grupo';

@Component({
  selector: 'page-grupos',
  templateUrl: 'grupos.html'
})

export class GruposPage {
  public grupos: Grupo[];

  constructor(public navCtrl: NavController) {
  /*   this.grupos = [
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
  */
 
  }
  public open(event, grupo:Grupo) {
    this.navCtrl.push(DetalhesGrupoPage, {grupo: grupo});
  }
}

