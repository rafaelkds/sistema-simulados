import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})
export class PainelComponent implements OnInit {

  displayedColumnsProvas: string[] = ['data', 'tempo', 'resultado'];
  dataSourceProvas = [
    { data: '26/07/2020 17:22', tempo: '0:10:04', resultado: 'REPROVADO' },
    { data: '26/07/2020 18:22', tempo: '0:10:04', resultado: 'APROVADO' },
    { data: '26/07/2020 19:22', tempo: '0:10:04', resultado: 'REPROVADO' },
    { data: '26/07/2020 20:22', tempo: '0:10:04', resultado: 'APROVADO' },
    { data: '26/07/2020 21:22', tempo: '0:10:04', resultado: 'REPROVADO' },
  ];

  chartDonutData = [{
    label: 'Aprovado',
    value: 0
  }, {
    label: 'Reprovado',
    value: 16
  }];
  chartDonutOptions = {
    resize: true,
    colors: ['#009900', '#FF0000', '#CCCCCC']
  };

  constructor(private router: Router) { }

  ngOnInit(): void {
    const ctx = (document.getElementById('painel-chart-desempenho') as any).getContext('2d');
    const myBarChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['PSS', 'RPA', 'ESS', 'CGA'],
        // backgroundColor: color(window.chartColors.blue).alpha(0.5).rgbString(),
        // borderColor: window.chartColors.blue,
        // borderWidth: 1,
        datasets: [{
          data: [0.5, 1, -0.5, -0.75],
          backgroundColor: ['blue', 'blue', 'blue', 'blue'],
          borderWidth: 1
        }]
      },
      options: {
        legend: {
          display: false
        },
        maintainAspectRatio: false
      }
    });
  }

  clickNova(): void {
    this.router.navigate(['novo'], { skipLocationChange: true });
  }

}
