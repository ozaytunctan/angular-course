import {Component, ElementRef, viewChild} from '@angular/core';
import {MatButton} from "@angular/material/button";
import Chart from "chart.js/auto";

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [
    MatButton
  ],
  template: `
    <div class="chart-container">
      <canvas #chart></canvas>
      <button mat-raised-button class="mb-16 mt-2">Go to channel analytics</button>
    </div>
  `,
  styles: `
    .chart-container {
      height: calc(100% - 100px);
      width: 100%;
    }
  `
})
export class AnalyticsComponent {

  chart = viewChild.required<ElementRef<any>>("chart");

  ngOnInit() {
    new Chart(this.chart().nativeElement, {
      type: 'line',
      data: {
        labels: ['Ağu', 'Eyl', 'Eki', 'Kas', 'Ara', 'Oca'],
        datasets: [
          {
            label: 'Views',
            data: [100, 102, 105, 110, 115, 120, 100, 130],
            borderColor: 'rgb(255,99,132)',
            backgroundColor: 'rgb(255,99,132,0.5)',
            fill: 'start'
          },
        ]
      },

      options: {
        maintainAspectRatio: false,
        elements: {
          line: {
            tension: 0.4
          }
        }
      }
    })
  }


}
