import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selecao',
  templateUrl: './selecao.component.html',
  styleUrls: ['./selecao.component.scss']
})
export class SelecaoComponent implements OnInit {

  opcoes = [
    {
      nome: 'Comissário',
      modulo: {
        id: 0,
        titulo: 'Módulo - 80 perguntas'
      },
      materias: {
        titulo: 'Matérias - 20 perguntas',
        materias:  [
          {
            id: 0,
            titulo: 'Primeiros Socorros'
          },
          {
            id: 0,
            titulo: 'Reg. da Prof. do Aeronauta'
          },
          {
            id: 0,
            titulo: 'Emergência Sobrevivência e Segurança'
          },
          {
            id: 0,
            titulo: 'Conhecimento Gerais de Aeronaves'
          }
        ]
      }
    },
    {
      nome: 'Piloto',
      modulo: {
        id: 0,
        titulo: 'Módulo - 100 perguntas'
      },
      materias: {
        titulo: 'Matérias - 20 perguntas',
        materias:  [
          {
            id: 0,
            titulo: 'Teoria de Voo'
          },
          {
            id: 0,
            titulo: 'Motores'
          },
          {
            id: 0,
            titulo: 'Regulamentos'
          },
          {
            id: 0,
            titulo: 'Meteorologia'
          },
          {
            id: 0,
            titulo: 'Navegação'
          }
        ]
      }
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  clickOpcao(id: number): void {

  }

}
