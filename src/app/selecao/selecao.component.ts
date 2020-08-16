import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selecao',
  templateUrl: './selecao.component.html',
  styleUrls: ['./selecao.component.scss']
})
export class SelecaoComponent implements OnInit {

  tabs = [
    {
      nome: 'Comissário',
      modulo: {
        id: -1,
        titulo: 'Módulo - 80 perguntas',
        nome: 'Módulo Comissário'
      },
      materias: {
        titulo: 'Matérias - 20 perguntas',
        opcoes: [
          {
            id: -1,
            nome: 'Primeiros Socorros'
          },
          {
            id: -1,
            nome: 'Reg. da Prof. do Aeronauta'
          },
          {
            id: -1,
            nome: 'Emergência Sobrevivência e Segurança'
          },
          {
            id: -1,
            nome: 'Conhecimento Gerais de Aeronaves'
          }
        ]
      }
    },
    {
      nome: 'Piloto',
      modulo: {
        id: -1,
        titulo: 'Módulo - 100 perguntas',
        nome: 'Módulo Piloto'
      },
      materias: {
        titulo: 'Matérias - 20 perguntas',
        opcoes: [
          {
            id: -1,
            nome: 'Teoria de Voo'
          },
          {
            id: -1,
            nome: 'Motores'
          },
          {
            id: -1,
            nome: 'Regulamentos'
          },
          {
            id: -1,
            nome: 'Meteorologia'
          },
          {
            id: -1,
            nome: 'Navegação'
          }
        ]
      }
    }
  ];

  idselecionado: number;
  tituloselecionado: string;

  constructor() { }

  ngOnInit(): void {
  }

  clickOpcao(opcao: { id: number, nome: string }): void {
    this.idselecionado = opcao.id;
    this.tituloselecionado = opcao.nome;
  }

}
